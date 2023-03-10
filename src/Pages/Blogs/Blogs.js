import React from 'react';

const Blogs = () => {
    const blogs = [
        {
            question: 'What are the different ways to manage a state in a React application?',
            answer: 'When we talk about state in our applications, it’s important to be clear about what types of state actually matter There are four main types of state you need to properly manage in your React apps: 1. Local state 2. Global state 3. Server state 4. URL state'
        },
        {
            question: 'How does prototypical inheritance work?',
            answer: 'The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object'
        },
        {
            question: 'What is a unit test? Why should we write unit tests?',
            answer: 'The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.'
        },
        {
            question: 'React vs. Angular vs. Vue?',
            answer: 'Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.Vue, also known as Vue.js, is the youngest member of the group.It was developed by ex- Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company.The most current version is always announced on the official Vue website on their releases page.Contributors for Vue are supported by Patreon.It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products(Facebook, Instagram, and WhatsApp).Similar to Vue, the React developers also announce their newest version on the blog section of the React website.'
        }
    ]
    return (
        <div className='mx-auto'>
            {
                blogs.map((blog, idx) => <div key={idx} className='shadow-lg p-5 w-2/3 mx-auto'>
                    <h2 className='text-3xl font-bold'>{blog.question}</h2>
                    <p className='text-xl'>{blog.answer}</p>
                </div>
                )
            }
        </div>
    );
};

export default Blogs;