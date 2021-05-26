module.exports = [
  {
    id: 'greencode_ext2',
    autoStart: true,
    activate: function (app) {
      console.log(
        'JupyterLab extension greencode_ext2 is activated!'
      );
      console.log(app.commands);
    }
  }
];
