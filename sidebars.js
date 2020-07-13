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
      ],
    },
  ],
};
