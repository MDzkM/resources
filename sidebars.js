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
        {
          "type": "category",
          "label": "Control Structure I",
          "items": [
            "simple-program",
            "decision-making-structure",
            "simple-input-output",
          ]
        },
        "problem-set-2",
        {
          "type": "category",
          "label": "Control Structure II",
          "items": [
            "loop",
            "function",
            "mutability-and-parameter",
            "return-break-continue-and-pass",
          ]
        },
        "exception",
        "documentation",
        "problem-set-3",
        {
          "type": "category",
          "label": "Additional Resources",
          "items": [
            "file-system",
            "directory",
            "use-text-file-in-python",
          ]
        },
        "zen-of-python",
      ],
    },
  ],
};
