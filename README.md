STUNTS
======

A frontend web application starter kit to take you from prototype to production.

Tools, Conventions, and Dependencies
------------------------------------

- Node version: [nvm](https://github.com/creationix/nvm)
- View Library: [react](https://reactjs.org/docs/react-component.html)
- State Management: [mobx](https://mobx.js.org/refguide/api.html)
- ReactiveX: [rxjs](http://reactivex.io/rxjs/)
- Utilities: [lodash](https://lodash.com/)
- Compiled with: [webpack](https://webpack.js.org)

Prototype
---------

```
$ git clone https://github.com/wieden-kennedy/stunts.git new-stunt
$ cd new-stunt
$ nvm use
$ npm install
$ npm start
```

Visit [localhost:3000](http://localhost:3000), develop stunts in your favorite editor. (May I suggest, [webstorm](https://www.jetbrains.com/webstorm/)?)

Production
----------

```
$ npm run build
```

Serve the contents of `'./public'` with:

```
$ npm run public
```

Or, do it all at once:

```
$ npm run dist
```

and visit [localhost:8081](http://localhost:8081).

License
-------

Apache 2.0

Other Useful Tools, Libraries, Components, etc
----------------------------------------------

- [classnames](https://github.com/JedWatson/classnames) `npm i --save classnames`
- [material-ui](https://github.com/mui-org/material-ui) `npm i --save material-ui`
- [react-icons](https://github.com/gorangajic/react-icons) `npm i --save react-icons`
- [yml-loader](https://github.com/nkt/yml-loader) (webpack) `npm i --save-dev yml-loader`
