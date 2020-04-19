export const defaultState = {
    users: [
	    {
	        id:"User_1",
	        name:"Admin_1",
	        friends:[`User_2`]
	    },
	    {
	        id:"User_2",
	        name:"Guest_2",
	        friends:[]
	    }
	],
    groups: [
	    {
	        name:"To Do",
	        id:"Group_1",
	        owner:"User_1"
	    },
	    {
	        name:"Doing",
	        id:"Group_2",
	        owner:"User_1"
	    },
	    {
	        name:"Done",
	        id:"Group_3",
	        owner:"User_1"
	    }
    ],
    tasks: [
	    {
	        name:"Refactor tests",
	        id:"Task_1",
	        group:"Group_1",
	        owner:"User_1",
	        isComplete:false,
	    },
	    {
	        name:"Meet with CTO",
	        id:"Task_2",
	        group:"Group_1",
	        owner:"User_1",
	        isComplete:true,
	    },
	    {
	        name:"Compile ES6",
	        id:"Task_3",
	        group:"Group_2",
	        owner:"User_2",
	        isComplete:false,
	    },
	    {
	        name:"Update component snapshots",
	        id:"Task_4",
	        group:"Group_2",
	        owner:"User_1",
	        isComplete:true,
	    },
	    {
	        name:"Production optimizations",
	        id:"Task_5",
	        group:"Group_3",
	        owner:"User_1",
	        isComplete:false,
	    }
	],
    comments: [
	    {
	        owner:"User_1",
	        id:"Comment_1",
	        task:"Task_1",
	        content:"Great work!"
	    }
    ]
}