require('dotenv').config();

const axios = require('axios');
const async = require('async');
const moment = require('moment-timezone');
moment.tz.setDefault("UTC");

// Axios
const $http = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});

function generateSessions(id) {
  let sessions = [];
  let nums = id.replace('tt', '').split('').map(item => parseInt(item));
  nums.forEach((num, index) => {
    let date = moment().startOf('day').add(index, 'days');
    for (let i = 0; i < num; i++) {
      let pos = index + i <= nums.length ? index + i : index + i - nums.length;
      let hours = nums[pos] + 12;
      let mins = nums[pos] < 2.5 ? 0 : nums[pos] < 5 ? 15 : nums[pos] < 7.5 ? 30 : 45;
      sessions.push({
        time: moment(date).add(hours, 'hours').add(mins, 'minutes'),
        seats: Math.round(200 - nums.reduce((acc, val) => { return acc + val; }) + (num * i))
      });
    }
  });
  return sessions.sort((a, b) => { if (a.time < b.time) { return - 1 } else { return a.time > b.time; } });
}

module.exports = {
  getData(callback) {
    let ids = process.env.IMDB_IDS.split(',');
    let data = [];
    async.each(
      ids,
      function (id, callback) {
        if (!data.find(item => item.id === id)) {
          $http.get(`?i=${id}`)
            .then(
              function (response) {
                if (!response.data.Error) {
                  data.push({
                    id,
                    movie: response.data,
                    sessions: generateSessions(id)
                  });
                  data.sort((a, b) => { if (a.id < b.id) { return - 1 } else { return a.id > b.id; } });
                } else {
                  console.log(response.data.Error);
                }
                callback();
              },
              function (err) {
                callback(err);
              }
            )
          ;
        } else {
          callback();
        }
      },
      function(err) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, data);
        }
      }
    );
  }
};
