module.exports = {
    prompts: [
        {
            type: 'string',
            name: 'groupId',
            message: 'Please write groupId',
            default: "com.kfirfer"
        },
        {
            type: 'string',
            name: 'artifactId',
            message: 'Please write artifactId',
            default: "helloworld"
        }
    ]
};
