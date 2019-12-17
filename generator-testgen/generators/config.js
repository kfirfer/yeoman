module.exports = {
  prompts: [
    {
      type: 'string',
      name: 'groupId',
      message: 'Please write groupId'
    },
    {
      type: 'string',
      name: 'artifactId',
      message: 'Please write artifactId'
    }
  ],
    dirsToCreate: ['src/main/java', 'src/test/java'],
    filesToCopy: [
      {
        input: '.gitignore',
        output: '.gitignore'
      }
    ],
      filesToRender: [
        {
          input: 'pom.xml',
          output: 'pom.xml'
        }
      ]
};
