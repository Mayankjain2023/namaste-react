# namaste-react



1. emmet
2. CDN
3. what is crossorigin
4. There are two types of dependencies that an App can have :
    a. Dev Dependency - For development purposes
    b. Normal Dependency - For production purposes


5. Our project has dependency and that dependency also has another dependencies , this is called as transitive dependencies


#parcel
1. Dev Build
2. Local server

3. HMR - hot module replacement ( refresh the page as soon as some change is saved)
4. File watching algorithm - written in c++
5. Faster builds as it's doing caching
6. It caches in .parcel-cache
7. Image optimization - (one of the expensive operation in web)
8. Minification
9. Bundles all the files
10. Parcel will compress the files
11. Consistent hashing
12. Code splitting 
13. Differential bundling -  supports older browers
14. Diagnostic
15. HTTPS
16. Tree shaking algorithm - removes the unused code which is not getting used
17. Different bundles for dev and production ( as production build takes more time than dev as it includes more optimization)




//React hook : normal js function given by react ( has already wrritten logic behind the scenes i.e JS utility function)

Two most important react hooks are :
1) useState() -> superfull react variables
a) Whenever a state variable updates/changes react rerenders the component
b) React re-renders the changes in DOM extremely fast
c) It keeps the data layer in sync with UI layer
2) useEffect()





:: Reconciliation Algorithm : It is also known as react fiber(react-16)
What is reconciliation?
reconciliation
    The algorithm React uses to diff one tree with another to determine which parts need to be changed.
    update
    A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.
    The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to A, and so on).

    Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.

    Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

Virtual DOM is representation of actual DOM( it is not a actual DOM)
These consists of react elements which are just react objects

Actual DOM consists of <div><h1></div> etc
Virtual DOM is created out of react.createElement('h1','id','msg');
which returns a react object consisting of nodes

Github: acdlite/react-fibre-architecture



Project Design :

/**
 * Header
 * - Logo 
 * - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *  - RestaurantCard
 *     -> image
 *     -> Name
 *     -> Cuisines
 *     -> Rate/offer
 * Footer
 * -Copyright
 * -Links
 * -Address 
 * -Contact
 * 
 */
