#!/usr/bin/env node

'use strict'

const st = require('st')
const http = require('http')
const path = require('path')
const dir = path.join(__dirname, '..')
const chokidar = require('chokidar')
const build = require('./build')

function start () {
  const mount = st({
    path: path.join(dir, 'dist'),
    cache: false,
    index: 'index.html'
  })

  http.createServer(function (req, res) {
    mount(req, res)
  }).listen(8080, function () {
    let url = 'http://localhost:8080'

    console.log(`Serving static site at: ${url}`)

    // Open browser url after 1.5s (it waits for everything to be built)
    setTimeout(function () {
      require('openurl').open(url)
    }, 1500)
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

  ;['layouts', 'static', 'content'].forEach(function (folder) {
    chokidar.watch(path.join(dir, folder), opts).on('change', function () {
      console.log('files changed in', folder, 'building...')
      build()
    })
  })
}

start()
