#!/usr/bin/env node

'use strict'

const st = require('st')
const http = require('http')
const path = require('path')
const dir = path.join(__dirname, '..')
const chokidar = require('chokidar')
const build = require('./build')

const PORT = process.env['PORT']

function start () {
  const mount = st({
    path: path.join(dir, 'dist'),
    cache: false,
    index: 'index.html'
  })

  http.createServer((req, res) => mount(req, res)).listen(PORT, () => {
    let url = `http://localhost:${PORT}`

    console.log(`Serving static site at: ${url}`)
  })

  /** File Watches for Re-Builds **/
  const opts = {
    persistent: true,
    ignoreInitial: true,
    followSymlinks: true,
    usePolling: true,
    alwaysStat: false,
    depth: undefined,
    interval: 100,
    ignorePermissionErrors: false,
    atomic: true
  }

  ;['layouts', 'static', 'content'].forEach(folder =>
    chokidar.watch(path.join(dir, folder), opts).on('change', () => {
      console.log('files changed in', folder, 'building...')
      build()
    })
  )
}

start()
