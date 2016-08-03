module.exports = {
  startLockTask: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "LockTask", "startLockTask", []);
  },
  stopLockTask: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "LockTask", "stopLockTask", []);
  }
};
