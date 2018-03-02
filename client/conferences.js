// This file is built with parcel-bundler locally.
// Dist is static/js
import moment from 'moment'
import lodash from 'lodash'

/*  eslint-env jquery */

function onLoadEvent () {
  const conferences = $('.conference')

  if (!lodash.isEmpty(conferences)) {
    assignBadge(conferences)
  }
  // else there are no conferences
}

function updateBadge (conf, cls, value) {
  const badge = conf.find('.badge')

  badge.addClass(cls)
  badge.text(value)
}

function assignBadge (conferences) {
  lodash.forEach(conferences, con => {
    const conf = $(con)

    const startDateString = conf.find('input[name="start-date"]').val()
    const endDateString = conf.find('input[name="end-date"]').val()
    const startDate = moment(startDateString)
    const endDate = moment(endDateString)
    const now = moment()

    if (startDate.isAfter(now, 'day')) {
      updateBadge(conf, 'upcoming', 'Upcoming')
    } else if (now.isBefore(endDate, 'day') || now.isSame(endDate, 'day')) {
      updateBadge(conf, 'today', 'Now')
    } else {
      updateBadge(conf, 'past', 'Past')
    }
  })
}

$(document).ready(() => {
  onLoadEvent()
})
