module.exports = {
  someSidebar: [
    {
      "type": "category",
      "label":"Welcome",
      "collapsed": false,
      "items": ["about-this-website"],
    },
    {
      "type": "category",
      "label": "DDP 0",
      "collapsed": false,
      "items": [
        "introduction",
        "installation",
        {
          "type": "category",
          "label": "Data Types",
          "items": [
            "data-type",
            "string",
            "integer",
            "float",
            "boolean",
            "list",
            "tuple",
            "other-data-types",
          ]
        },
        "variable",
        "problem-set-1",
        "control-structure-1",
        "problem-set-2",
        "control-structure-2",
        "exception",
        "problem-set-3",
        "additional-resources",
      ],
    },
  ],
};
