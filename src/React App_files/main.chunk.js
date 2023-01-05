(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css':
      /*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/main.css ***!
  \*****************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/lib/css-base.js */ './node_modules/css-loader/lib/css-base.js',
        )(false);
        // imports

        // module
        exports.push([
          module.i,
          '/* Box sizing rules */\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=list],\nol[role=list] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don\'t have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n.button {\n  background-color: #132a36;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 700;\n  font-size: 1em;\n  color: #f4f4f4;\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  border-style: none;\n}\n.button:hover {\n  background-color: #284859;\n}\n.button:active {\n  background-color: #121212;\n}\n\n.buttonDisabled {\n  background-color: #d9d9d9;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 700;\n  font-size: 1em;\n  color: #b3b3b3;\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n}\n\n.linkButton {\n  color: #121212;\n  display: flex;\n  align-items: center;\n}\n\n.icon {\n  width: 1.5em;\n  height: 1.2em;\n}\n\n.chip {\n  background-color: #8ab0d2;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 900;\n  font-size: 1em;\n  color: #132a36;\n  padding: 0.7em 1.3em;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  justify-content: center;\n  border-radius: 2em;\n}\n\n.adCard {\n  box-shadow: 0.4em 0.6em 0.7em rgba(19, 40, 50, 0.2);\n  border-radius: 5px;\n  height: 400px;\n  width: 180px;\n  flex-shrink: 0;\n}\n\n.adCardImage {\n  border-radius: 5px 5px 0px 0px;\n  object-fit: cover;\n  height: 200px;\n  width: -webkit-fill-available;\n  width: stretch;\n}\n\n.textContentAd {\n  padding: 0.6em;\n}\n.textContentAd .title {\n  margin-block-start: 0em;\n  margin-block-end: 1.67em;\n  margin-inline-start: 0px;\n}\n.textContentAd .iconText {\n  display: flex;\n  align-items: center;\n  grid-gap: 0.6em;\n  gap: 0.6em;\n  padding-bottom: 0.3em;\n}\n\n.icon {\n  max-height: 32px;\n  max-width: 32px;\n}\n\n.inputField {\n  background-color: #f4f4f4;\n  width: -webkit-fill-available;\n  width: stretch;\n  border-radius: 5px;\n  border: none;\n}\n.inputField:focus {\n  outline: none;\n  background-color: #d9d9d9;\n}\n\n.inputField {\n  background-color: #f4f4f4;\n  width: -webkit-fill-available;\n  width: stretch;\n  border-radius: 5px;\n  border: solid 1px #ff0000;\n  border-color: #132a36;\n}\n.inputField:focus {\n  outline: none;\n  background-color: #d9d9d9;\n}\n\n.searchField {\n  display: flex;\n  grid-gap: 0.5em;\n  gap: 0.5em;\n  width: -webkit-fill-available;\n  width: stretch;\n}\n\n.informationContentAd {\n  padding: 10px;\n}\n\n.titleAndPoints {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.shortInfoSection {\n  background-color: #ee9999;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1 1 1;\n  justify-items: start;\n}\n\n.iconText {\n  display: flex;\n  align-items: center;\n  grid-gap: 0.6em;\n  gap: 0.6em;\n  padding-bottom: 0.3em;\n}\n\n.scrollableSection {\n  display: flex;\n  align-items: stretch;\n  grid-gap: 1em;\n  gap: 1em;\n  overflow-x: scroll;\n  padding-bottom: 1em;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.categoryHeading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.tags {\n  display: flex;\n  align-items: stretch;\n  grid-gap: 0.8em;\n  gap: 0.8em;\n  flex-wrap: wrap;\n  padding-bottom: 1em;\n  padding-top: 1em;\n}\n\n.dealCard {\n  display: flex;\n  box-shadow: 0.4em 0.6em 0.7em rgba(19, 40, 50, 0.2);\n  border-radius: 5px;\n  height: 200px;\n  width: -webkit-fill-available;\n  width: stretch;\n  flex-shrink: 0;\n}\n\n.dealCardImgContainer {\n  object-fit: contain;\n  height: -webkit-fill-available;\n  height: stretch;\n  width: 400px;\n}\n\n.adCardImage {\n  border-radius: 5px 0px 0px 5px;\n}\n\n.textContentDeal {\n  padding: 0.6em 8px 0.6em 1.2em;\n  background-color: #f4f4f4;\n  width: -webkit-fill-available;\n  width: stretch;\n}\n.textContentDeal .title {\n  margin-block-start: 0em;\n  margin-block-end: 1.67em;\n  margin-inline-start: 0px;\n}\n.textContentDeal .iconText {\n  display: flex;\n  align-items: center;\n  grid-gap: 0.6em;\n  gap: 0.6em;\n  padding-bottom: 0.3em;\n  padding-top: 8px;\n}\n\n.icon {\n  max-height: 32px;\n  max-width: 32px;\n}\n\n.pointsSection {\n  background-color: #132a36;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2em 0.5em;\n}\n\n.points {\n  display: flex;\n  align-items: center;\n  grid-gap: 0.5em;\n  gap: 0.5em;\n}\n\n.iconPoints {\n  width: 1.5em;\n  height: 1.5em;\n}\n\n.dealsSection {\n  display: flex;\n  flex-direction: column;\n  padding: 8px 10px;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.buttonSticky {\n  position: sticky;\n  position: fixed;\n  padding-bottom: 1em;\n  z-index: 1000;\n}\n\n.bodyText {\n  font-family: "Roboto", sans-serif;\n  font-weight: 400;\n  font-size: 1em;\n  color: #121212;\n}\n\n.heading1 {\n  font-family: "Montserrat", sans-serif;\n  font-weight: 900;\n  font-size: 1.5em;\n  color: #121212;\n}\n\n.heading3 {\n  font-family: "Montserrat", sans-serif;\n  font-weight: 600;\n  font-size: 1.5em;\n}\n\n.heading4 {\n  font-family: "Montserrat", sans-serif;\n  font-weight: 700;\n  font-size: 1.125em;\n  color: #121212;\n  margin: 0.4em 0em;\n}\n\n.heading5 {\n  font-family: "Montserrat", sans-serif;\n  font-weight: 900;\n  font-size: 1em;\n  color: #121212;\n  margin: 0.4em 0em;\n}\n\n.loginPage {\n  background-color: #8ab0d2;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  flex-direction: column;\n  padding: 2em;\n}\n\n.loginForm {\n  width: -webkit-fill-available;\n  width: stretch;\n}\n\n.formGroup {\n  padding: 1em 0em;\n}\n\n.inputField {\n  padding: 1em;\n  width: -webkit-fill-available;\n  width: stretch;\n}\n\n.signUp {\n  margin-top: 1em;\n}\n\n.forgotPassword {\n  margin-top: 1em;\n}\n\n.links {\n  margin-top: 1em;\n}\n\n.profilePage {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-self: start;\n  grid-gap: 1em;\n  gap: 1em;\n  margin: 0 0.5em;\n}\n\n.nameAndPicture {\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em 0em 0em 0em;\n}\n.nameAndPicture .profilePicture {\n  width: 10em;\n  height: 10em;\n  border-radius: 10em;\n  margin-bottom: 1em;\n}\n\n.profileShortInfo {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.buttonSticky {\n  position: sticky;\n  position: fixed;\n  bottom: 1em;\n  z-index: 1000;\n  padding: 1em;\n  width: 100vw;\n}\n\n.headerSection {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 2em;\n  gap: 2em;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  background-color: #8ab0d2;\n}\n\n.homePage .mainContent {\n  padding: 1em 0.5em;\n}\n',
          '',
        ]);

        // exports

        /***/
      },

    /***/ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css':
      /*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../node_modules/css-loader/lib/css-base.js */ './node_modules/css-loader/lib/css-base.js',
        )(false);
        // imports

        // module
        exports.push([
          module.i,
          "body {\n  margin: 0;\n  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",
          '',
        ]);

        // exports

        /***/
      },

    /***/ './src/App.js':
      /*!********************!*\
  !*** ./src/App.js ***!
  \********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./css/main.css */ './src/css/main.css');
        /* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _css_main_css__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _components_login_Signup__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./components/login/Signup */ './src/components/login/Signup.js',
          );
        /* harmony import */ var _components_profile_Dashboard__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./components/profile/Dashboard */ './src/components/profile/Dashboard.js',
          );
        /* harmony import */ var _components_login_Login__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./components/login/Login */ './src/components/login/Login.js',
          );
        /* harmony import */ var _components_login_ForgotPassword__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./components/login/ForgotPassword */ './src/components/login/ForgotPassword.js',
          );
        /* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./context/AuthContext */ './src/context/AuthContext.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );
        /* harmony import */ var _components_nav_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./components/nav/PrivateRoute */ './src/components/nav/PrivateRoute.js',
          );
        /* harmony import */ var _components_profile_UpdateProfile__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./components/profile/UpdateProfile */ './src/components/profile/UpdateProfile.js',
          );
        /* harmony import */ var _components_atomics_LinkButton__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./components/atomics/LinkButton */ './src/components/atomics/LinkButton.js',
          );
        /* harmony import */ var _components_atomics_Button__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./components/atomics/Button */ './src/components/atomics/Button.js',
          );
        /* harmony import */ var _components_shop_Deal__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ./components/shop/Deal */ './src/components/shop/Deal.js',
          );
        /* harmony import */ var _components_textComponents_Heading5__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ./components/textComponents/Heading5 */ './src/components/textComponents/Heading5.js',
          );
        /* harmony import */ var _components_atomics_AdCard__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! ./components/atomics/AdCard */ './src/components/atomics/AdCard.js',
          );
        /* harmony import */ var _ad_test_jpg__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(/*! ./ad_test.jpg */ './src/ad_test.jpg');
        /* harmony import */ var _ad_test_jpg__WEBPACK_IMPORTED_MODULE_15___default =
          /*#__PURE__*/ __webpack_require__.n(
            _ad_test_jpg__WEBPACK_IMPORTED_MODULE_15__,
          );
        /* harmony import */ var _components_shop_Points__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! ./components/shop/Points */ './src/components/shop/Points.js',
          );
        /* harmony import */ var _components_profile_Profile__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(
            /*! ./components/profile/Profile */ './src/components/profile/Profile.js',
          );
        /* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(
            /*! ./components/home/Home */ './src/components/home/Home.js',
          );
        /* harmony import */ var _components_login_SignupDetails__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(
            /*! ./components/login/SignupDetails */ './src/components/login/SignupDetails.js',
          );
        /* harmony import */ var _components_ads_Offer__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(
            /*! ./components/ads/Offer */ './src/components/ads/Offer.js',
          );
        /* harmony import */ var _components_ads_Request__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(
            /*! ./components/ads/Request */ './src/components/ads/Request.js',
          );
        /* harmony import */ var _components_shop_Shop__WEBPACK_IMPORTED_MODULE_22__ =
          __webpack_require__(
            /*! ./components/shop/Shop */ './src/components/shop/Shop.js',
          );
        /* harmony import */ var _components_atomics_AdOpened__WEBPACK_IMPORTED_MODULE_23__ =
          __webpack_require__(
            /*! ./components/atomics/AdOpened */ './src/components/atomics/AdOpened.js',
          );
        var _jsxFileName = '/Users/signebennmarker/AgeTech/age-tech/src/App.js';

        var ad = {
          id: 1,
          title: 'Baka hos mig',
          description: 'Kom och baka',
          image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
          location: 'Skultunaparken',
          date: '20 november',
          points: 23,
        };
        var user = {
          points: 245,
        };
        function App() {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_7__['BrowserRouter'],
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__['default'],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 9,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Routes'],
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 11,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      path: '/dashboard',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_nav_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 50,
                              columnNumber: 47,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 13,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                      {
                        path: '',
                        element:
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _components_profile_Dashboard__WEBPACK_IMPORTED_MODULE_3__[
                              'default'
                            ],
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51,
                                columnNumber: 39,
                              },
                            },
                          ),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 51,
                          columnNumber: 15,
                        },
                      },
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      path: '/updateProfile',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_nav_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 54,
                              columnNumber: 51,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 13,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                      {
                        path: '',
                        element:
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _components_profile_UpdateProfile__WEBPACK_IMPORTED_MODULE_9__[
                              'default'
                            ],
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 55,
                                columnNumber: 39,
                              },
                            },
                          ),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 55,
                          columnNumber: 15,
                        },
                      },
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      path: '/profile',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_nav_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 57,
                              columnNumber: 45,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 13,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                      {
                        path: '',
                        element:
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _components_profile_Profile__WEBPACK_IMPORTED_MODULE_17__[
                              'default'
                            ],
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 58,
                                columnNumber: 39,
                              },
                            },
                          ),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 58,
                          columnNumber: 15,
                        },
                      },
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      path: '/home',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_nav_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 60,
                              columnNumber: 42,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 13,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                      {
                        path: '',
                        element:
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _components_home_Home__WEBPACK_IMPORTED_MODULE_18__[
                              'default'
                            ],
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61,
                                columnNumber: 39,
                              },
                            },
                          ),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 61,
                          columnNumber: 15,
                        },
                      },
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      path: '/shop',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_nav_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 63,
                              columnNumber: 42,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                        columnNumber: 13,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                      {
                        path: '',
                        element:
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _components_shop_Shop__WEBPACK_IMPORTED_MODULE_22__[
                              'default'
                            ],
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64,
                                columnNumber: 39,
                              },
                            },
                          ),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 64,
                          columnNumber: 15,
                        },
                      },
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      path: '/ad',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_nav_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 67,
                              columnNumber: 40,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 13,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                      {
                        path: '/ad/:id',
                        element:
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _components_atomics_AdOpened__WEBPACK_IMPORTED_MODULE_23__[
                              'default'
                            ],
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 68,
                                columnNumber: 46,
                              },
                            },
                          ),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 68,
                          columnNumber: 15,
                        },
                      },
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      path: '/signupDetails',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_nav_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 70,
                              columnNumber: 51,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 13,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                      {
                        path: '',
                        element:
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _components_login_SignupDetails__WEBPACK_IMPORTED_MODULE_19__[
                              'default'
                            ],
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71,
                                columnNumber: 39,
                              },
                            },
                          ),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 71,
                          columnNumber: 15,
                        },
                      },
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      path: '/createOffer',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_nav_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 73,
                              columnNumber: 49,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 13,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                      {
                        path: '',
                        element:
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _components_ads_Offer__WEBPACK_IMPORTED_MODULE_20__[
                              'default'
                            ],
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74,
                                columnNumber: 39,
                              },
                            },
                          ),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 74,
                          columnNumber: 15,
                        },
                      },
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      path: '/createRequest',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_nav_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 76,
                              columnNumber: 51,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 13,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                      {
                        path: '',
                        element:
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _components_ads_Request__WEBPACK_IMPORTED_MODULE_21__[
                              'default'
                            ],
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 77,
                                columnNumber: 39,
                              },
                            },
                          ),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 15,
                        },
                      },
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      path: '/signupDetails',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_nav_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 79,
                              columnNumber: 51,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 13,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                      {
                        path: '',
                        element:
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _components_login_SignupDetails__WEBPACK_IMPORTED_MODULE_19__[
                              'default'
                            ],
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 80,
                                columnNumber: 39,
                              },
                            },
                          ),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 80,
                          columnNumber: 15,
                        },
                      },
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      path: '/signup',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_login_Signup__WEBPACK_IMPORTED_MODULE_2__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 82,
                              columnNumber: 44,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 13,
                      },
                    },
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      exact: true,
                      path: '/',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_login_Login__WEBPACK_IMPORTED_MODULE_4__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 83,
                              columnNumber: 44,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 13,
                      },
                    },
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__['Route'],
                    {
                      path: '/forgotPassword',
                      element:
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_login_ForgotPassword__WEBPACK_IMPORTED_MODULE_5__[
                            'default'
                          ],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 84,
                              columnNumber: 52,
                            },
                          },
                        ),
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 13,
                      },
                    },
                  ),
                ),
              ),
            ),
          );
        }
        /* harmony default export */ __webpack_exports__['default'] = App;

        /***/
      },

    /***/ './src/ad_test.jpg':
      /*!*************************!*\
  !*** ./src/ad_test.jpg ***!
  \*************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/ad_test.5858c082.jpg';

        /***/
      },

    /***/ './src/components/ads/Offer.js':
      /*!*************************************!*\
  !*** ./src/components/ads/Offer.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Offer;
          },
        );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../firebase */ './src/firebase.js');
        /* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../context/AuthContext */ './src/context/AuthContext.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );
        /* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! firebase/firestore */ './node_modules/firebase/firestore/dist/esm/index.esm.js',
          );

        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/components/ads/Offer.js';

        function Offer() {
          var _useAuth = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__['useAuth'],
            )(),
            currentUser = _useAuth.currentUser;
          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState2 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState, 2),
            titel = _useState2[0],
            setTitel = _useState2[1];
          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState4 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState3, 2),
            description = _useState4[0],
            setDescription = _useState4[1];
          var _useState5 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState6 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState5, 2),
            tags = _useState6[0],
            setTags = _useState6[1];
          var _useState7 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState8 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState7, 2),
            imageUrl = _useState8[0],
            setImageUrl = _useState8[1];
          var _useState9 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState10 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState9, 2),
            place = _useState10[0],
            setPlace = _useState10[1];
          var _useState11 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState12 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState11, 2),
            compensation = _useState12[0],
            setCompensation = _useState12[1];
          var _useState13 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState14 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState13, 2),
            time = _useState14[0],
            setTime = _useState14[1];
          var uid = currentUser.uid;
          var navigate = Object(
            react_router_dom__WEBPACK_IMPORTED_MODULE_4__['useNavigate'],
          )();
          var handleSubmit = function handleSubmit(event) {
            event.preventDefault();
            Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_5__['addDoc'])(
              Object(
                firebase_firestore__WEBPACK_IMPORTED_MODULE_5__['collection'],
              )(_firebase__WEBPACK_IMPORTED_MODULE_2__['db'], 'adOffer'),
              {
                titel: titel,
                description: description,
                tags: tags,
                imageUrl: imageUrl,
                place: place,
                compensation: compensation,
                time: time,
                creator: uid,
              },
            );
            setTitel('');
            setDescription('');
            setTags('');
            setPlace('');
            setCompensation('');
            setTime('');
            navigate('/dashboard');
          };
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'form',
            {
              onSubmit: handleSubmit,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'titel',
                  name: 'titel',
                  value: titel,
                  placeholder: 'Titel',
                  onChange: function onChange(event) {
                    return setTitel(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'description',
                  name: 'description',
                  value: description,
                  placeholder: 'Tell us about your offer',
                  onChange: function onChange(event) {
                    return setDescription(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'tags',
                  name: 'tags',
                  value: tags,
                  placeholder: 'Tags',
                  onChange: function onChange(event) {
                    return setTags(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'imageUrl',
                  name: 'imageUrl',
                  value: imageUrl,
                  placeholder: 'Image Url',
                  onChange: function onChange(event) {
                    return setImageUrl(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'place',
                  name: 'place',
                  value: place,
                  placeholder: 'Place',
                  onChange: function onChange(event) {
                    return setPlace(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'time',
                  name: 'time',
                  value: time,
                  placeholder: 'Time',
                  onChange: function onChange(event) {
                    return setTime(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'compensation',
                  name: 'compensation',
                  value: compensation,
                  placeholder: 'Compensation',
                  onChange: function onChange(event) {
                    return setCompensation(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'input',
              {
                //disabled={loading}
                className: 'form-btn',
                type: 'submit',
                value: 'Submit',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 7,
                },
              },
            ),
          );
        }

        /***/
      },

    /***/ './src/components/ads/Request.js':
      /*!***************************************!*\
  !*** ./src/components/ads/Request.js ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Request;
          },
        );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../firebase */ './src/firebase.js');
        /* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../context/AuthContext */ './src/context/AuthContext.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );
        /* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! firebase/firestore */ './node_modules/firebase/firestore/dist/esm/index.esm.js',
          );

        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/components/ads/Request.js';

        function Request() {
          var _useAuth = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__['useAuth'],
            )(),
            currentUser = _useAuth.currentUser;
          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState2 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState, 2),
            titel = _useState2[0],
            setTitel = _useState2[1];
          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState4 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState3, 2),
            description = _useState4[0],
            setDescription = _useState4[1];
          var _useState5 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState6 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState5, 2),
            tags = _useState6[0],
            setTags = _useState6[1];
          var _useState7 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState8 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState7, 2),
            imageUrl = _useState8[0],
            setImageUrl = _useState8[1];
          var _useState9 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState10 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState9, 2),
            place = _useState10[0],
            setPlace = _useState10[1];
          var _useState11 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState12 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState11, 2),
            compensation = _useState12[0],
            setCompensation = _useState12[1];
          var _useState13 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState14 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState13, 2),
            time = _useState14[0],
            setTime = _useState14[1];
          var uid = currentUser.uid;
          var navigate = Object(
            react_router_dom__WEBPACK_IMPORTED_MODULE_4__['useNavigate'],
          )();
          var handleSubmit = function handleSubmit(event) {
            event.preventDefault();
            Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_5__['addDoc'])(
              Object(
                firebase_firestore__WEBPACK_IMPORTED_MODULE_5__['collection'],
              )(_firebase__WEBPACK_IMPORTED_MODULE_2__['db'], 'adRequest'),
              {
                titel: titel,
                description: description,
                tags: tags,
                imageUrl: imageUrl,
                place: place,
                compensation: compensation,
                time: time,
                creator: uid,
              },
            );
            setTitel('');
            setDescription('');
            setTags('');
            setPlace('');
            setCompensation('');
            setTime('');
            navigate('/dashboard');
          };
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'form',
            {
              onSubmit: handleSubmit,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'titel',
                  name: 'titel',
                  value: titel,
                  placeholder: 'Titel',
                  onChange: function onChange(event) {
                    return setTitel(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'description',
                  name: 'description',
                  value: description,
                  placeholder: 'Tell us about your offer',
                  onChange: function onChange(event) {
                    return setDescription(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'tags',
                  name: 'tags',
                  value: tags,
                  placeholder: 'Tags',
                  onChange: function onChange(event) {
                    return setTags(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'imageUrl',
                  name: 'imageUrl',
                  value: imageUrl,
                  placeholder: 'Image Url',
                  onChange: function onChange(event) {
                    return setImageUrl(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'place',
                  name: 'place',
                  value: place,
                  placeholder: 'Place',
                  onChange: function onChange(event) {
                    return setPlace(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'time',
                  name: 'time',
                  value: time,
                  placeholder: 'Time',
                  onChange: function onChange(event) {
                    return setTime(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'compensation',
                  name: 'compensation',
                  value: compensation,
                  placeholder: 'Compensation',
                  onChange: function onChange(event) {
                    return setCompensation(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'input',
              {
                //disabled={loading}
                className: 'form-btn',
                type: 'submit',
                value: 'Submit',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 7,
                },
              },
            ),
          );
        }

        /***/
      },

    /***/ './src/components/atomics/AdCard.js':
      /*!******************************************!*\
  !*** ./src/components/atomics/AdCard.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../textComponents/BodyText */ './src/components/textComponents/BodyText.js',
          );
        /* harmony import */ var _textComponents_Heading5__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../textComponents/Heading5 */ './src/components/textComponents/Heading5.js',
          );
        /* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-icons/md */ './node_modules/react-icons/md/index.esm.js',
          );
        /* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./Button */ './src/components/atomics/Button.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/atomics/AdCard.js';

        var adCard = function adCard(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'adCard',
              onClick: props.onClickFunction,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_5__['Link'],
              {
                to: '/ad/'.concat(props.ad.id),
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_4__['default'],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'adCardImgContainer',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 7,
                },
              },
              ' ',
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'img',
                {
                  src: props.ad.image,
                  alt: 'ad',
                  className: 'adCardImage',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'textContentAd',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _textComponents_Heading5__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ],
                {
                  className: 'title',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 9,
                  },
                },
                props.ad.title,
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'iconText',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 9,
                  },
                },
                ' ',
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_icons_md__WEBPACK_IMPORTED_MODULE_3__[
                    'MdOutlineLocationOn'
                  ],
                  {
                    className: 'icon',
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24,
                      columnNumber: 11,
                    },
                  },
                ),
                ' ',
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ],
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                      columnNumber: 11,
                    },
                  },
                  props.ad.location,
                ),
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'iconText',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 9,
                  },
                },
                ' ',
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_icons_md__WEBPACK_IMPORTED_MODULE_3__[
                    'MdCalendarToday'
                  ],
                  {
                    className: 'icon',
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 11,
                    },
                  },
                ),
                ' ',
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ],
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 30,
                      columnNumber: 11,
                    },
                  },
                  props.ad.date,
                ),
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'iconText',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 9,
                  },
                },
                ' ',
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_icons_md__WEBPACK_IMPORTED_MODULE_3__['MdStarOutline'],
                  {
                    className: 'icon',
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 11,
                    },
                  },
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ],
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 11,
                    },
                  },
                  props.ad.points,
                  ' po\xE4ng',
                ),
              ),
            ),
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = adCard;

        /***/
      },

    /***/ './src/components/atomics/AdOpened.js':
      /*!********************************************!*\
  !*** ./src/components/atomics/AdOpened.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../textComponents/BodyText */ './src/components/textComponents/BodyText.js',
          );
        /* harmony import */ var _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../textComponents/Heading1 */ './src/components/textComponents/Heading1.js',
          );
        /* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-icons/md */ './node_modules/react-icons/md/index.esm.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );
        /* harmony import */ var sass__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! sass */ './node_modules/sass/sass.default.dart.js',
          );
        /* harmony import */ var sass__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            sass__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _ad_test_jpg__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ../../ad_test.jpg */ './src/ad_test.jpg');
        /* harmony import */ var _ad_test_jpg__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/ __webpack_require__.n(
            _ad_test_jpg__WEBPACK_IMPORTED_MODULE_6__,
          );
        /* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./Button */ './src/components/atomics/Button.js',
          );
        /* harmony import */ var _textComponents_Heading5__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../textComponents/Heading5 */ './src/components/textComponents/Heading5.js',
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/atomics/AdOpened.js';

        var ad = {
          id: 1,
          title: 'Baka hos mig',
          description:
            'Under en eftermiddag lär jag dig att baka med sursdeg. Jag kommer visa exakt hur du gör dig egen surdegstartare occh hur du har hand om din surdeg. Vi kommer också att att baka ut upp till 4 limpor med med surdeg som bas. ',
          image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
          location: 'Skultunaparken',
          date: '20 november',
          time: '16.00',
          points: 23,
        };
        var adOpen = function adOpen(props) {
          //takes in one ad object though props

          var params = Object(
            react_router_dom__WEBPACK_IMPORTED_MODULE_4__['useParams'],
          )();
          var id = params.id;
          Object(react__WEBPACK_IMPORTED_MODULE_0__['useEffect'])(function () {
            // Update the document title using the browser API
            console.log('ID from params', id);
          });
          var navigate = Object(
            react_router_dom__WEBPACK_IMPORTED_MODULE_4__['useNavigate'],
          )();
          function handleClick() {
            navigate('/home');
          }
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'adOpen',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 9,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: handleClick,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 13,
                },
              },
              'Go home',
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'adImgContainer',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 13,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'img',
                {
                  src: ad.image,
                  alt: 'ad',
                  className: 'adCardImage',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 17,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'informationContentAd',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 13,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'titleAndPoints',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_2__[
                    'default'
                  ],
                  {
                    className: 'title',
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 21,
                    },
                  },
                  ad.title,
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    className: 'iconText',
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_icons_md__WEBPACK_IMPORTED_MODULE_3__[
                      'MdStarOutline'
                    ],
                    {
                      className: 'icon',
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61,
                        columnNumber: 25,
                      },
                    },
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__[
                      'default'
                    ],
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 25,
                      },
                    },
                    ad.points,
                    ' po\xE4ng',
                  ),
                ),
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 17,
                  },
                },
                ad.description,
              ),
              '// Get creator of ad and picture of creator of ad',
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_7__['default'],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 17,
                  },
                },
                'Kontakta annons\xF6r',
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'shortInfoSection',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    className: 'iconText',
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 21,
                    },
                  },
                  ' ',
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_icons_md__WEBPACK_IMPORTED_MODULE_3__[
                      'MdOutlineLocationOn'
                    ],
                    {
                      className: 'icon',
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 25,
                      },
                    },
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _textComponents_Heading5__WEBPACK_IMPORTED_MODULE_8__[
                      'default'
                    ],
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 25,
                      },
                    },
                    'Plats',
                  ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    className: 'iconText',
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 21,
                    },
                  },
                  ' ',
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_icons_md__WEBPACK_IMPORTED_MODULE_3__[
                      'MdCalendarToday'
                    ],
                    {
                      className: 'icon',
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 25,
                      },
                    },
                  ),
                  ' ',
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _textComponents_Heading5__WEBPACK_IMPORTED_MODULE_8__[
                      'default'
                    ],
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 25,
                      },
                    },
                    'Datum',
                  ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    className: 'iconText',
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_icons_md__WEBPACK_IMPORTED_MODULE_3__['MdAccessTime'],
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 25,
                      },
                    },
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _textComponents_Heading5__WEBPACK_IMPORTED_MODULE_8__[
                      'default'
                    ],
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 25,
                      },
                    },
                    'Tid',
                  ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ],
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 21,
                    },
                  },
                  ad.date,
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ],
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 21,
                    },
                  },
                  ad.location,
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ],
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 21,
                    },
                  },
                  ad.time,
                ),
              ),
            ),
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = adOpen;

        /***/
      },

    /***/ './src/components/atomics/Button.js':
      /*!******************************************!*\
  !*** ./src/components/atomics/Button.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/atomics/Button.js';

        var Button = function Button(_ref) {
          var children = _ref.children,
            onClickFunction = _ref.onClickFunction,
            _ref$active = _ref.active,
            active = _ref$active === void 0 ? true : _ref$active;
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            active
              ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    className: 'button',
                    onClick: onClickFunction,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 7,
                      columnNumber: 9,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8,
                        columnNumber: 11,
                      },
                    },
                    ' ',
                    children,
                  ),
                )
              : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    className: 'buttonDisabled',
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 11,
                      columnNumber: 9,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12,
                        columnNumber: 11,
                      },
                    },
                    ' ',
                    children,
                  ),
                ),
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = Button;

        /***/
      },

    /***/ './src/components/atomics/CategorySection.js':
      /*!***************************************************!*\
  !*** ./src/components/atomics/CategorySection.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _ScrollableSection__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./ScrollableSection */ './src/components/atomics/ScrollableSection.js',
          );
        /* harmony import */ var _textComponents_Heading3__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../textComponents/Heading3 */ './src/components/textComponents/Heading3.js',
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/atomics/CategorySection.js';

        var CategorySection = function CategorySection(_ref) {
          var _ref$category = _ref.category,
            category =
              _ref$category === void 0 ? 'Category Name' : _ref$category,
            ads = _ref.ads;
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'categoryHeading',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _textComponents_Heading3__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9,
                    columnNumber: 9,
                  },
                },
                category,
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10,
                    columnNumber: 9,
                  },
                },
                'Visa mer >',
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'scrollableSection',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _ScrollableSection__WEBPACK_IMPORTED_MODULE_1__['default'],
                {
                  ads: ads,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 9,
                  },
                },
              ),
            ),
          );
        };
        /* harmony default export */ __webpack_exports__['default'] =
          CategorySection;

        /***/
      },

    /***/ './src/components/atomics/Chip.js':
      /*!****************************************!*\
  !*** ./src/components/atomics/Chip.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/atomics/Chip.js';

        var Chip = function Chip(_ref) {
          var onClickFunction = _ref.onClickFunction,
            tagName = _ref.tagName;
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'chip',
              onClick: onClickFunction,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 5,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 6,
                  columnNumber: 7,
                },
              },
              tagName,
            ),
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = Chip;

        /***/
      },

    /***/ './src/components/atomics/LinkButton.js':
      /*!**********************************************!*\
  !*** ./src/components/atomics/LinkButton.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-icons/md */ './node_modules/react-icons/md/index.esm.js',
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/atomics/LinkButton.js';

        var LinkButton = function LinkButton(_ref) {
          var children = _ref.children,
            onClickFunction = _ref.onClickFunction,
            destination = _ref.destination;
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'a',
            {
              href: destination,
              className: 'linkButton',
              onClick: onClickFunction,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 5,
                columnNumber: 5,
              },
            },
            ' ',
            children,
            ' ',
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_icons_md__WEBPACK_IMPORTED_MODULE_1__[
                'MdKeyboardArrowRight'
              ],
              {
                className: 'icon',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 7,
                  columnNumber: 18,
                },
              },
            ),
          );
        };
        /* harmony default export */ __webpack_exports__['default'] =
          LinkButton;

        /***/
      },

    /***/ './src/components/atomics/ScrollableSection.js':
      /*!*****************************************************!*\
  !*** ./src/components/atomics/ScrollableSection.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _AdCard__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./AdCard */ './src/components/atomics/AdCard.js',
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/atomics/ScrollableSection.js';

        var ScrollableSection = function ScrollableSection(_ref) {
          var ads = _ref.ads;
          var sectionAds = ads;
          var sectionItems = sectionAds.map(function (ad) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _AdCard__WEBPACK_IMPORTED_MODULE_1__['default'],
              {
                ad: ad,
                key: ad.id,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 7,
                  columnNumber: 5,
                },
              },
            );
          });
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'scrollableSection',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10,
                columnNumber: 10,
              },
            },
            sectionItems,
          );
        };
        /* harmony default export */ __webpack_exports__['default'] =
          ScrollableSection;

        /***/
      },

    /***/ './src/components/atomics/SearchField.js':
      /*!***********************************************!*\
  !*** ./src/components/atomics/SearchField.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__,
          );

        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/atomics/SearchField.js';

        var TextInput = function TextInput(_ref) {
          var _ref$placeholderText = _ref.placeholderText,
            placeholderText =
              _ref$placeholderText === void 0
                ? 'Vad söker du efter?'
                : _ref$placeholderText;
          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState2 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState, 2),
            searchInput = _useState2[0],
            setSearchInput = _useState2[1];
          var handleChange = function handleChange(e) {
            e.preventDefault();
            setSearchInput(e.target.value);
          };
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            {
              className: 'searchField',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'input',
              {
                type: 'search',
                placeholder: placeholderText,
                onChange: handleChange,
                value: searchInput,
                className: 'inputField',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 7,
                },
              },
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'input',
              {
                className: 'button',
                type: 'submit',
                value: 'S\xF6k',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 7,
                },
              },
            ),
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = TextInput;

        /***/
      },

    /***/ './src/components/atomics/TagsSection.js':
      /*!***********************************************!*\
  !*** ./src/components/atomics/TagsSection.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _textComponents_Heading3__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../textComponents/Heading3 */ './src/components/textComponents/Heading3.js',
          );
        /* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./Chip */ './src/components/atomics/Chip.js');
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/atomics/TagsSection.js';

        var TagSection = function TagSection(_ref) {
          var sectionTitle = _ref.sectionTitle,
            tags = _ref.tags;
          var sectionItems = tags.map(function (tag) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Chip__WEBPACK_IMPORTED_MODULE_2__['default'],
              {
                tagName: tag.tagName,
                key: tag.id,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 7,
                  columnNumber: 5,
                },
              },
            );
          });
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'tagsSection',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _textComponents_Heading3__WEBPACK_IMPORTED_MODULE_1__['default'],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 7,
                },
              },
              sectionTitle,
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'tags',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 7,
                },
              },
              sectionItems,
            ),
          );
        };
        /* harmony default export */ __webpack_exports__['default'] =
          TagSection;

        /***/
      },

    /***/ './src/components/home/AllCategories.js':
      /*!**********************************************!*\
  !*** ./src/components/home/AllCategories.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _atomics_CategorySection__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../atomics/CategorySection */ './src/components/atomics/CategorySection.js',
          );
        /* harmony import */ var _ad_test_jpg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../ad_test.jpg */ './src/ad_test.jpg');
        /* harmony import */ var _ad_test_jpg__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _ad_test_jpg__WEBPACK_IMPORTED_MODULE_2__,
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/home/AllCategories.js';

        var ads = [
          {
            id: 1,
            title: 'Baka hos mig',
            description: 'Kom och baka',
            image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
            location: 'Skultunaparken',
            date: '20 november',
            points: 23,
          },
          {
            id: 2,
            title: 'snickra hos mig',
            description: 'Kom och baka',
            image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
            location: 'Skultunaparken',
            date: '20 november',
            points: 23,
          },
          {
            id: 3,
            title: 'snickra hos mig',
            description: 'Kom och baka',
            image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
            location: 'Skultunaparken',
            date: '20 november',
            points: 23,
          },
          {
            id: 4,
            title: 'snickra hos mig',
            description: 'Kom och baka',
            image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
            location: 'Skultunaparken',
            date: '20 november',
            points: 23,
          },
        ];

        //get ads though search-functionality later

        var AllCategories = function AllCategories(_ref) {
          var categories = _ref.categories;
          var allCategories = categories.map(function (category) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _atomics_CategorySection__WEBPACK_IMPORTED_MODULE_1__['default'],
              {
                category: category.tagName,
                key: category.id,
                ads: ads,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 5,
                },
              },
            );
          });
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 10,
              },
            },
            allCategories,
          );
        };
        /* harmony default export */ __webpack_exports__['default'] =
          AllCategories;

        /***/
      },

    /***/ './src/components/home/Header.js':
      /*!***************************************!*\
  !*** ./src/components/home/Header.js ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../textComponents/Heading1 */ './src/components/textComponents/Heading1.js',
          );
        /* harmony import */ var _atomics_SearchField__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../atomics/SearchField */ './src/components/atomics/SearchField.js',
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/home/Header.js';

        var Header = function Header(_ref) {
          var children = _ref.children,
            onClickFunction = _ref.onClickFunction,
            _ref$active = _ref.active,
            active = _ref$active === void 0 ? true : _ref$active;
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'headerSection',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_1__['default'],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8,
                  columnNumber: 7,
                },
              },
              'Boomer Biz',
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _atomics_SearchField__WEBPACK_IMPORTED_MODULE_2__['default'],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9,
                  columnNumber: 7,
                },
              },
            ),
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = Header;

        /***/
      },

    /***/ './src/components/home/Home.js':
      /*!*************************************!*\
  !*** ./src/components/home/Home.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Home;
          },
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../context/AuthContext */ './src/context/AuthContext.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );
        /* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-icons/md */ './node_modules/react-icons/md/index.esm.js',
          );
        /* harmony import */ var _atomics_CategorySection__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../atomics/CategorySection */ './src/components/atomics/CategorySection.js',
          );
        /* harmony import */ var _ad_test_jpg__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ../../ad_test.jpg */ './src/ad_test.jpg');
        /* harmony import */ var _ad_test_jpg__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _ad_test_jpg__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./Header */ './src/components/home/Header.js',
          );
        /* harmony import */ var _atomics_TagsSection__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../atomics/TagsSection */ './src/components/atomics/TagsSection.js',
          );
        /* harmony import */ var _AllCategories__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./AllCategories */ './src/components/home/AllCategories.js',
          );
        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/components/home/Home.js';

        var ads = [
          {
            id: 1,
            title: 'Baka hos mig',
            description: 'Kom och baka',
            image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
            location: 'Skultunaparken',
            date: '20 november',
            points: 23,
          },
          {
            id: 2,
            title: 'snickra hos mig',
            description: 'Kom och baka',
            image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
            location: 'Skultunaparken',
            date: '20 november',
            points: 23,
          },
          {
            id: 3,
            title: 'snickra hos mig',
            description: 'Kom och baka',
            image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
            location: 'Skultunaparken',
            date: '20 november',
            points: 23,
          },
          {
            id: 4,
            title: 'snickra hos mig',
            description: 'Kom och baka',
            image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
            location: 'Skultunaparken',
            date: '20 november',
            points: 23,
          },
        ];
        var tags = [
          {
            id: 1,
            tagName: 'Stickning',
          },
          {
            id: 2,
            tagName: 'Måla',
          },
          {
            id: 3,
            tagName: 'Motorcross',
          },
          {
            id: 4,
            tagName: 'Fest',
          },
          {
            id: 5,
            tagName: 'Snickeri',
          },
          {
            id: 6,
            tagName: 'Bakning',
          },
        ];
        function Home() {
          var navigate = Object(
            react_router_dom__WEBPACK_IMPORTED_MODULE_2__['useNavigate'],
          )();
          var _useAuth = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__['useAuth'],
            )(),
            currentUser = _useAuth.currentUser;
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'homePage',
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Header__WEBPACK_IMPORTED_MODULE_6__['default'],
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 7,
                },
              },
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'mainContent',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _atomics_TagsSection__WEBPACK_IMPORTED_MODULE_7__['default'],
                {
                  sectionTitle: 'Kolla in dessa',
                  tags: tags,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 9,
                  },
                },
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _atomics_CategorySection__WEBPACK_IMPORTED_MODULE_4__[
                  'default'
                ],
                {
                  ads: ads,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 9,
                  },
                },
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _AllCategories__WEBPACK_IMPORTED_MODULE_8__['default'],
                {
                  categories: tags,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 9,
                  },
                },
              ),
            ),
          );
        }

        /***/
      },

    /***/ './src/components/login/ForgotPassword.js':
      /*!************************************************!*\
  !*** ./src/components/login/ForgotPassword.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return ForgotPassword;
          },
        );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js',
          );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../context/AuthContext */ './src/context/AuthContext.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );
        /* harmony import */ var _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../textComponents/Heading1 */ './src/components/textComponents/Heading1.js',
          );

        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/components/login/ForgotPassword.js';
        function _regeneratorRuntime() {
          'use strict';
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return exports;
            };
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty =
              Object.defineProperty ||
              function (obj, key, desc) {
                obj[key] = desc.value;
              },
            $Symbol = 'function' == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || '@@iterator',
            asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
            toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, '');
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator =
                outerFn && outerFn.prototype instanceof Generator
                  ? outerFn
                  : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, '_invoke', {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return { type: 'normal', arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: 'throw', arg: err };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype =
              getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ['next', 'throw', 'return'].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ('throw' !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value &&
                  'object' == typeof value &&
                  hasOwn.call(value, '__await')
                  ? PromiseImpl.resolve(value.__await).then(
                      function (value) {
                        invoke('next', value, resolve, reject);
                      },
                      function (err) {
                        invoke('throw', err, resolve, reject);
                      },
                    )
                  : PromiseImpl.resolve(value).then(
                      function (unwrapped) {
                        (result.value = unwrapped), resolve(result);
                      },
                      function (error) {
                        return invoke('throw', error, resolve, reject);
                      },
                    );
              }
              reject(record.arg);
            }
            var previousPromise;
            defineProperty(this, '_invoke', {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            var state = 'suspendedStart';
            return function (method, arg) {
              if ('executing' === state)
                throw new Error('Generator is already running');
              if ('completed' === state) {
                if ('throw' === method) throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if ('next' === context.method)
                  context.sent = context._sent = context.arg;
                else if ('throw' === context.method) {
                  if ('suspendedStart' === state)
                    throw ((state = 'completed'), context.arg);
                  context.dispatchException(context.arg);
                } else
                  'return' === context.method &&
                    context.abrupt('return', context.arg);
                state = 'executing';
                var record = tryCatch(innerFn, self, context);
                if ('normal' === record.type) {
                  if (
                    ((state = context.done ? 'completed' : 'suspendedYield'),
                    record.arg === ContinueSentinel)
                  )
                    continue;
                  return { value: record.arg, done: context.done };
                }
                'throw' === record.type &&
                  ((state = 'completed'),
                  (context.method = 'throw'),
                  (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var methodName = context.method,
              method = delegate.iterator[methodName];
            if (undefined === method)
              return (
                (context.delegate = null),
                ('throw' === methodName &&
                  delegate.iterator.return &&
                  ((context.method = 'return'),
                  (context.arg = undefined),
                  maybeInvokeDelegate(delegate, context),
                  'throw' === context.method)) ||
                  ('return' !== methodName &&
                    ((context.method = 'throw'),
                    (context.arg = new TypeError(
                      "The iterator does not provide a '" +
                        methodName +
                        "' method",
                    )))),
                ContinueSentinel
              );
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ('throw' === record.type)
              return (
                (context.method = 'throw'),
                (context.arg = record.arg),
                (context.delegate = null),
                ContinueSentinel
              );
            var info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  'return' !== context.method &&
                    ((context.method = 'next'), (context.arg = undefined)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = 'throw'),
                (context.arg = new TypeError(
                  'iterator result is not an object',
                )),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs &&
                ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            (record.type = 'normal'),
              delete record.arg,
              (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [{ tryLoc: 'root' }]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ('function' == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length; ) {
                      if (hasOwn.call(iterable, i))
                        return (
                          (next.value = iterable[i]), (next.done = !1), next
                        );
                    }
                    return (next.value = undefined), (next.done = !0), next;
                  };
                return (next.next = next);
              }
            }
            return { next: doneResult };
          }
          function doneResult() {
            return { value: undefined, done: !0 };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, 'constructor', {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, 'constructor', {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              'GeneratorFunction',
            )),
            (exports.isGeneratorFunction = function (genFun) {
              var ctor = 'function' == typeof genFun && genFun.constructor;
              return (
                !!ctor &&
                (ctor === GeneratorFunction ||
                  'GeneratorFunction' === (ctor.displayName || ctor.name))
              );
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define(genFun, toStringTagSymbol, 'GeneratorFunction')),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return { __await: arg };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (
              innerFn,
              outerFn,
              self,
              tryLocsList,
              PromiseImpl,
            ) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              var iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList),
                PromiseImpl,
              );
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                  });
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, 'Generator'),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, 'toString', function () {
              return '[object Generator]';
            }),
            (exports.keys = function (val) {
              var object = Object(val),
                keys = [];
              for (var key in object) {
                keys.push(key);
              }
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    var key = keys.pop();
                    if (key in object)
                      return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = undefined),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = undefined),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (var name in this) {
                    't' === name.charAt(0) &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = undefined);
                  }
              },
              stop: function stop() {
                this.done = !0;
                var rootRecord = this.tryEntries[0].completion;
                if ('throw' === rootRecord.type) throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = 'throw'),
                    (record.arg = exception),
                    (context.next = loc),
                    caught &&
                      ((context.method = 'next'), (context.arg = undefined)),
                    !!caught
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i],
                    record = entry.completion;
                  if ('root' === entry.tryLoc) return handle('end');
                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, 'catchLoc'),
                      hasFinally = hasOwn.call(entry, 'finallyLoc');
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally)
                        throw new Error(
                          'try statement without catch or finally',
                        );
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, 'finallyLoc') &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  ('break' === type || 'continue' === type) &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = 'next'),
                      (this.next = finallyEntry.finallyLoc),
                      ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function complete(record, afterLoc) {
                if ('throw' === record.type) throw record.arg;
                return (
                  'break' === record.type || 'continue' === record.type
                    ? (this.next = record.arg)
                    : 'return' === record.type
                    ? ((this.rval = this.arg = record.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === record.type &&
                      afterLoc &&
                      (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function finish(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return (
                      this.complete(entry.completion, entry.afterLoc),
                      resetTryEntry(entry),
                      ContinueSentinel
                    );
                }
              },
              catch: function _catch(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ('throw' === record.type) {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(
                iterable,
                resultName,
                nextLoc,
              ) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc,
                  }),
                  'next' === this.method && (this.arg = undefined),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }

        function ForgotPassword() {
          var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_2__['useRef'])();
          var _useAuth = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__['useAuth'],
            )(),
            resetPassword = _useAuth.resetPassword;
          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_2__['useState'],
            )(''),
            _useState2 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ],
            )(_useState, 2),
            error = _useState2[0],
            setError = _useState2[1];
          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_2__['useState'],
            )(''),
            _useState4 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ],
            )(_useState3, 2),
            message = _useState4[0],
            setMessage = _useState4[1];
          var _useState5 = Object(
              react__WEBPACK_IMPORTED_MODULE_2__['useState'],
            )(false),
            _useState6 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ],
            )(_useState5, 2),
            loading = _useState6[0],
            setLoading = _useState6[1]; //const navigate = useNavigate();
          function handleSubmit(_x) {
            return _handleSubmit.apply(this, arguments);
          } //Check if it does a email check
          function _handleSubmit() {
            _handleSubmit = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(e) {
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          e.preventDefault();
                          _context.prev = 1;
                          setError('');
                          setMessage('');
                          setLoading(true);
                          _context.next = 7;
                          return resetPassword(emailRef.current.value);
                        case 7:
                          setMessage('Check your email');
                          _context.next = 13;
                          break;
                        case 10:
                          _context.prev = 10;
                          _context.t0 = _context['catch'](1);
                          setError(_context.t0.code + _context.t0.message);
                        //error.code error.message to get detailed errors
                        case 13:
                          setLoading(false);
                        case 14:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  null,
                  [[1, 10]],
                );
              }),
            );
            return _handleSubmit.apply(this, arguments);
          }
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
            null,
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'div',
              {
                className: 'loginPage',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 9,
                  },
                },
                'Password Reset',
              ),
              error &&
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'p',
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 19,
                    },
                  },
                  error,
                ),
              message &&
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'p',
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 21,
                    },
                  },
                  message,
                ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'form',
                {
                  className: 'loginForm',
                  onSubmit: handleSubmit,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 9,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'div',
                  {
                    className: 'formGroup',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                      columnNumber: 11,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    'input',
                    {
                      className: 'inputField',
                      type: 'email',
                      name: 'email',
                      placeholder: 'Email',
                      ref: emailRef,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40,
                        columnNumber: 13,
                      },
                    },
                  ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'input',
                  {
                    disabled: loading,
                    className: 'button',
                    type: 'submit',
                    value: 'Submit',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 11,
                    },
                  },
                ),
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'div',
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 9,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'div',
                  {
                    className: 'links',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 11,
                    },
                  },
                  'Need an account? ',
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_4__['Link'],
                    {
                      to: '/signup',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 30,
                      },
                    },
                    'Sign up',
                  ),
                  ' ',
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'div',
                  {
                    className: 'links',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 11,
                    },
                  },
                  'Have an account? ',
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_4__['Link'],
                    {
                      to: '/login',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 30,
                      },
                    },
                    'Log \xEDn',
                  ),
                  ' ',
                ),
              ),
            ),
          );
        }

        /***/
      },

    /***/ './src/components/login/Login.js':
      /*!***************************************!*\
  !*** ./src/components/login/Login.js ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Login;
          },
        );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js',
          );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../context/AuthContext */ './src/context/AuthContext.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );
        /* harmony import */ var _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../textComponents/Heading1 */ './src/components/textComponents/Heading1.js',
          );
        /* harmony import */ var _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../textComponents/BodyText */ './src/components/textComponents/BodyText.js',
          );

        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/components/login/Login.js';
        function _regeneratorRuntime() {
          'use strict';
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return exports;
            };
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty =
              Object.defineProperty ||
              function (obj, key, desc) {
                obj[key] = desc.value;
              },
            $Symbol = 'function' == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || '@@iterator',
            asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
            toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, '');
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator =
                outerFn && outerFn.prototype instanceof Generator
                  ? outerFn
                  : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, '_invoke', {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return { type: 'normal', arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: 'throw', arg: err };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype =
              getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ['next', 'throw', 'return'].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ('throw' !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value &&
                  'object' == typeof value &&
                  hasOwn.call(value, '__await')
                  ? PromiseImpl.resolve(value.__await).then(
                      function (value) {
                        invoke('next', value, resolve, reject);
                      },
                      function (err) {
                        invoke('throw', err, resolve, reject);
                      },
                    )
                  : PromiseImpl.resolve(value).then(
                      function (unwrapped) {
                        (result.value = unwrapped), resolve(result);
                      },
                      function (error) {
                        return invoke('throw', error, resolve, reject);
                      },
                    );
              }
              reject(record.arg);
            }
            var previousPromise;
            defineProperty(this, '_invoke', {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            var state = 'suspendedStart';
            return function (method, arg) {
              if ('executing' === state)
                throw new Error('Generator is already running');
              if ('completed' === state) {
                if ('throw' === method) throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if ('next' === context.method)
                  context.sent = context._sent = context.arg;
                else if ('throw' === context.method) {
                  if ('suspendedStart' === state)
                    throw ((state = 'completed'), context.arg);
                  context.dispatchException(context.arg);
                } else
                  'return' === context.method &&
                    context.abrupt('return', context.arg);
                state = 'executing';
                var record = tryCatch(innerFn, self, context);
                if ('normal' === record.type) {
                  if (
                    ((state = context.done ? 'completed' : 'suspendedYield'),
                    record.arg === ContinueSentinel)
                  )
                    continue;
                  return { value: record.arg, done: context.done };
                }
                'throw' === record.type &&
                  ((state = 'completed'),
                  (context.method = 'throw'),
                  (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var methodName = context.method,
              method = delegate.iterator[methodName];
            if (undefined === method)
              return (
                (context.delegate = null),
                ('throw' === methodName &&
                  delegate.iterator.return &&
                  ((context.method = 'return'),
                  (context.arg = undefined),
                  maybeInvokeDelegate(delegate, context),
                  'throw' === context.method)) ||
                  ('return' !== methodName &&
                    ((context.method = 'throw'),
                    (context.arg = new TypeError(
                      "The iterator does not provide a '" +
                        methodName +
                        "' method",
                    )))),
                ContinueSentinel
              );
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ('throw' === record.type)
              return (
                (context.method = 'throw'),
                (context.arg = record.arg),
                (context.delegate = null),
                ContinueSentinel
              );
            var info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  'return' !== context.method &&
                    ((context.method = 'next'), (context.arg = undefined)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = 'throw'),
                (context.arg = new TypeError(
                  'iterator result is not an object',
                )),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs &&
                ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            (record.type = 'normal'),
              delete record.arg,
              (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [{ tryLoc: 'root' }]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ('function' == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length; ) {
                      if (hasOwn.call(iterable, i))
                        return (
                          (next.value = iterable[i]), (next.done = !1), next
                        );
                    }
                    return (next.value = undefined), (next.done = !0), next;
                  };
                return (next.next = next);
              }
            }
            return { next: doneResult };
          }
          function doneResult() {
            return { value: undefined, done: !0 };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, 'constructor', {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, 'constructor', {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              'GeneratorFunction',
            )),
            (exports.isGeneratorFunction = function (genFun) {
              var ctor = 'function' == typeof genFun && genFun.constructor;
              return (
                !!ctor &&
                (ctor === GeneratorFunction ||
                  'GeneratorFunction' === (ctor.displayName || ctor.name))
              );
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define(genFun, toStringTagSymbol, 'GeneratorFunction')),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return { __await: arg };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (
              innerFn,
              outerFn,
              self,
              tryLocsList,
              PromiseImpl,
            ) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              var iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList),
                PromiseImpl,
              );
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                  });
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, 'Generator'),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, 'toString', function () {
              return '[object Generator]';
            }),
            (exports.keys = function (val) {
              var object = Object(val),
                keys = [];
              for (var key in object) {
                keys.push(key);
              }
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    var key = keys.pop();
                    if (key in object)
                      return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = undefined),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = undefined),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (var name in this) {
                    't' === name.charAt(0) &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = undefined);
                  }
              },
              stop: function stop() {
                this.done = !0;
                var rootRecord = this.tryEntries[0].completion;
                if ('throw' === rootRecord.type) throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = 'throw'),
                    (record.arg = exception),
                    (context.next = loc),
                    caught &&
                      ((context.method = 'next'), (context.arg = undefined)),
                    !!caught
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i],
                    record = entry.completion;
                  if ('root' === entry.tryLoc) return handle('end');
                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, 'catchLoc'),
                      hasFinally = hasOwn.call(entry, 'finallyLoc');
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally)
                        throw new Error(
                          'try statement without catch or finally',
                        );
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, 'finallyLoc') &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  ('break' === type || 'continue' === type) &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = 'next'),
                      (this.next = finallyEntry.finallyLoc),
                      ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function complete(record, afterLoc) {
                if ('throw' === record.type) throw record.arg;
                return (
                  'break' === record.type || 'continue' === record.type
                    ? (this.next = record.arg)
                    : 'return' === record.type
                    ? ((this.rval = this.arg = record.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === record.type &&
                      afterLoc &&
                      (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function finish(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return (
                      this.complete(entry.completion, entry.afterLoc),
                      resetTryEntry(entry),
                      ContinueSentinel
                    );
                }
              },
              catch: function _catch(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ('throw' === record.type) {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(
                iterable,
                resultName,
                nextLoc,
              ) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc,
                  }),
                  'next' === this.method && (this.arg = undefined),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }

        function Login() {
          var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_2__['useRef'])();
          var passwordRef = Object(
            react__WEBPACK_IMPORTED_MODULE_2__['useRef'],
          )();
          var _useAuth = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__['useAuth'],
            )(),
            login = _useAuth.login;
          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_2__['useState'],
            )(''),
            _useState2 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ],
            )(_useState, 2),
            error = _useState2[0],
            setError = _useState2[1];
          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_2__['useState'],
            )(false),
            _useState4 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ],
            )(_useState3, 2),
            loading = _useState4[0],
            setLoading = _useState4[1];
          var navigate = Object(
            react_router_dom__WEBPACK_IMPORTED_MODULE_4__['useNavigate'],
          )();
          function handleSubmit(_x) {
            return _handleSubmit.apply(this, arguments);
          } //Check if it does a email check
          function _handleSubmit() {
            _handleSubmit = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(e) {
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          e.preventDefault();
                          _context.prev = 1;
                          setError('');
                          setLoading(true);
                          _context.next = 6;
                          return login(
                            emailRef.current.value,
                            passwordRef.current.value,
                          );
                        case 6:
                          navigate('/dashboard');
                          _context.next = 14;
                          break;
                        case 9:
                          _context.prev = 9;
                          _context.t0 = _context['catch'](1);
                          //console.log(JSON.stringify(error))
                          setError(_context.t0.code + _context.t0.message);
                          if (_context.t0.code === 'auth/wrong-password') {
                            setError('Wrong password.');
                          }
                          if (_context.t0.code === 'auth/user-not-found') {
                            {
                              setError('This email adress is not registered.');
                            }
                          }
                        //error.code error.message to get detailed errors
                        case 14:
                          setLoading(false);
                        case 15:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  null,
                  [[1, 9]],
                );
              }),
            );
            return _handleSubmit.apply(this, arguments);
          }
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            'div',
            {
              className: 'loginPage',
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_5__['default'],
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 7,
                },
              },
              'Log In',
            ),
            error &&
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'p',
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 17,
                  },
                },
                error,
              ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'form',
              {
                className: 'loginForm',
                onSubmit: handleSubmit,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'div',
                {
                  className: 'formGroup',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 9,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'input',
                  {
                    className: 'inputField',
                    type: 'email',
                    name: 'email',
                    placeholder: 'Email',
                    ref: emailRef,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47,
                      columnNumber: 11,
                    },
                  },
                ),
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'div',
                {
                  className: 'formGroup',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 9,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'input',
                  {
                    className: 'inputField',
                    type: 'password',
                    name: 'password',
                    placeholder: 'Password',
                    ref: passwordRef,
                    required: true,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 11,
                    },
                  },
                ),
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'input',
                {
                  disabled: loading,
                  className: 'button',
                  type: 'submit',
                  value: 'Submit',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'div',
              {
                className: 'signUp',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_6__[
                  'default'
                ],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 9,
                  },
                },
                ' ',
                'Need an account? ',
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_4__['Link'],
                  {
                    to: '/signup',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 28,
                    },
                  },
                  'Sign up',
                ),
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'div',
              {
                className: 'forgotPassword',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_6__[
                  'default'
                ],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 9,
                  },
                },
                ' ',
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_4__['Link'],
                  {
                    to: '/forgotPassword',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 11,
                    },
                  },
                  'Forgot password',
                ),
              ),
            ),
          );
        }

        /***/
      },

    /***/ './src/components/login/Signup.js':
      /*!****************************************!*\
  !*** ./src/components/login/Signup.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Signup;
          },
        );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js',
          );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../context/AuthContext */ './src/context/AuthContext.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );
        /* harmony import */ var _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../textComponents/Heading1 */ './src/components/textComponents/Heading1.js',
          );

        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/components/login/Signup.js';
        function _regeneratorRuntime() {
          'use strict';
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return exports;
            };
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty =
              Object.defineProperty ||
              function (obj, key, desc) {
                obj[key] = desc.value;
              },
            $Symbol = 'function' == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || '@@iterator',
            asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
            toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, '');
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator =
                outerFn && outerFn.prototype instanceof Generator
                  ? outerFn
                  : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, '_invoke', {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return { type: 'normal', arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: 'throw', arg: err };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype =
              getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ['next', 'throw', 'return'].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ('throw' !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value &&
                  'object' == typeof value &&
                  hasOwn.call(value, '__await')
                  ? PromiseImpl.resolve(value.__await).then(
                      function (value) {
                        invoke('next', value, resolve, reject);
                      },
                      function (err) {
                        invoke('throw', err, resolve, reject);
                      },
                    )
                  : PromiseImpl.resolve(value).then(
                      function (unwrapped) {
                        (result.value = unwrapped), resolve(result);
                      },
                      function (error) {
                        return invoke('throw', error, resolve, reject);
                      },
                    );
              }
              reject(record.arg);
            }
            var previousPromise;
            defineProperty(this, '_invoke', {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            var state = 'suspendedStart';
            return function (method, arg) {
              if ('executing' === state)
                throw new Error('Generator is already running');
              if ('completed' === state) {
                if ('throw' === method) throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if ('next' === context.method)
                  context.sent = context._sent = context.arg;
                else if ('throw' === context.method) {
                  if ('suspendedStart' === state)
                    throw ((state = 'completed'), context.arg);
                  context.dispatchException(context.arg);
                } else
                  'return' === context.method &&
                    context.abrupt('return', context.arg);
                state = 'executing';
                var record = tryCatch(innerFn, self, context);
                if ('normal' === record.type) {
                  if (
                    ((state = context.done ? 'completed' : 'suspendedYield'),
                    record.arg === ContinueSentinel)
                  )
                    continue;
                  return { value: record.arg, done: context.done };
                }
                'throw' === record.type &&
                  ((state = 'completed'),
                  (context.method = 'throw'),
                  (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var methodName = context.method,
              method = delegate.iterator[methodName];
            if (undefined === method)
              return (
                (context.delegate = null),
                ('throw' === methodName &&
                  delegate.iterator.return &&
                  ((context.method = 'return'),
                  (context.arg = undefined),
                  maybeInvokeDelegate(delegate, context),
                  'throw' === context.method)) ||
                  ('return' !== methodName &&
                    ((context.method = 'throw'),
                    (context.arg = new TypeError(
                      "The iterator does not provide a '" +
                        methodName +
                        "' method",
                    )))),
                ContinueSentinel
              );
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ('throw' === record.type)
              return (
                (context.method = 'throw'),
                (context.arg = record.arg),
                (context.delegate = null),
                ContinueSentinel
              );
            var info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  'return' !== context.method &&
                    ((context.method = 'next'), (context.arg = undefined)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = 'throw'),
                (context.arg = new TypeError(
                  'iterator result is not an object',
                )),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs &&
                ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            (record.type = 'normal'),
              delete record.arg,
              (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [{ tryLoc: 'root' }]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ('function' == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length; ) {
                      if (hasOwn.call(iterable, i))
                        return (
                          (next.value = iterable[i]), (next.done = !1), next
                        );
                    }
                    return (next.value = undefined), (next.done = !0), next;
                  };
                return (next.next = next);
              }
            }
            return { next: doneResult };
          }
          function doneResult() {
            return { value: undefined, done: !0 };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, 'constructor', {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, 'constructor', {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              'GeneratorFunction',
            )),
            (exports.isGeneratorFunction = function (genFun) {
              var ctor = 'function' == typeof genFun && genFun.constructor;
              return (
                !!ctor &&
                (ctor === GeneratorFunction ||
                  'GeneratorFunction' === (ctor.displayName || ctor.name))
              );
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define(genFun, toStringTagSymbol, 'GeneratorFunction')),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return { __await: arg };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (
              innerFn,
              outerFn,
              self,
              tryLocsList,
              PromiseImpl,
            ) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              var iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList),
                PromiseImpl,
              );
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                  });
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, 'Generator'),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, 'toString', function () {
              return '[object Generator]';
            }),
            (exports.keys = function (val) {
              var object = Object(val),
                keys = [];
              for (var key in object) {
                keys.push(key);
              }
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    var key = keys.pop();
                    if (key in object)
                      return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = undefined),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = undefined),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (var name in this) {
                    't' === name.charAt(0) &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = undefined);
                  }
              },
              stop: function stop() {
                this.done = !0;
                var rootRecord = this.tryEntries[0].completion;
                if ('throw' === rootRecord.type) throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = 'throw'),
                    (record.arg = exception),
                    (context.next = loc),
                    caught &&
                      ((context.method = 'next'), (context.arg = undefined)),
                    !!caught
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i],
                    record = entry.completion;
                  if ('root' === entry.tryLoc) return handle('end');
                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, 'catchLoc'),
                      hasFinally = hasOwn.call(entry, 'finallyLoc');
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally)
                        throw new Error(
                          'try statement without catch or finally',
                        );
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, 'finallyLoc') &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  ('break' === type || 'continue' === type) &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = 'next'),
                      (this.next = finallyEntry.finallyLoc),
                      ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function complete(record, afterLoc) {
                if ('throw' === record.type) throw record.arg;
                return (
                  'break' === record.type || 'continue' === record.type
                    ? (this.next = record.arg)
                    : 'return' === record.type
                    ? ((this.rval = this.arg = record.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === record.type &&
                      afterLoc &&
                      (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function finish(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return (
                      this.complete(entry.completion, entry.afterLoc),
                      resetTryEntry(entry),
                      ContinueSentinel
                    );
                }
              },
              catch: function _catch(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ('throw' === record.type) {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(
                iterable,
                resultName,
                nextLoc,
              ) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc,
                  }),
                  'next' === this.method && (this.arg = undefined),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }

        function Signup() {
          var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_2__['useRef'])();
          var passwordRef = Object(
            react__WEBPACK_IMPORTED_MODULE_2__['useRef'],
          )();
          var passwordConfirmRef = Object(
            react__WEBPACK_IMPORTED_MODULE_2__['useRef'],
          )();
          var _useAuth = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__['useAuth'],
            )(),
            signup = _useAuth.signup;
          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_2__['useState'],
            )(''),
            _useState2 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ],
            )(_useState, 2),
            error = _useState2[0],
            setError = _useState2[1];
          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_2__['useState'],
            )(false),
            _useState4 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ],
            )(_useState3, 2),
            loading = _useState4[0],
            setLoading = _useState4[1];
          var navigate = Object(
            react_router_dom__WEBPACK_IMPORTED_MODULE_4__['useNavigate'],
          )();
          function handleSubmit(_x) {
            return _handleSubmit.apply(this, arguments);
          } //Check if it does a email check
          function _handleSubmit() {
            _handleSubmit = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(e) {
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          e.preventDefault();
                          if (
                            !(
                              passwordRef.current.value !==
                              passwordConfirmRef.current.value
                            )
                          ) {
                            _context.next = 3;
                            break;
                          }
                          return _context.abrupt(
                            'return',
                            setError('Password do not match'),
                          );
                        case 3:
                          _context.prev = 3;
                          setError('');
                          setLoading(true);
                          _context.next = 8;
                          return signup(
                            emailRef.current.value,
                            passwordRef.current.value,
                          );
                        case 8:
                          navigate('/signupdetails'); //Ändra routing till formulärsida
                          _context.next = 14;
                          break;
                        case 11:
                          _context.prev = 11;
                          _context.t0 = _context['catch'](3);
                          setError(_context.t0.code + _context.t0.message);
                        //Den validerar lösenordslängd, måste vara mer än 6 tecken
                        //error.code error.message to get detailed errors
                        case 14:
                          setLoading(false);
                        case 15:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  null,
                  [[3, 11]],
                );
              }),
            );
            return _handleSubmit.apply(this, arguments);
          }
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
            null,
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'div',
              {
                className: 'loginPage',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 9,
                  },
                },
                'Sign Up',
              ),
              error &&
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'p',
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40,
                      columnNumber: 19,
                    },
                  },
                  error,
                ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'form',
                {
                  className: 'loginForm',
                  onSubmit: handleSubmit,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 9,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'div',
                  {
                    className: 'formGroup',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 11,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    'input',
                    {
                      className: 'inputField',
                      type: 'email',
                      name: 'email',
                      placeholder: 'Email',
                      ref: emailRef,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43,
                        columnNumber: 13,
                      },
                    },
                  ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'div',
                  {
                    className: 'formGroup',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 11,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    'input',
                    {
                      className: 'inputField',
                      type: 'password',
                      name: 'password',
                      placeholder: 'Password',
                      ref: passwordRef,
                      required: true,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 13,
                      },
                    },
                  ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'div',
                  {
                    className: 'formGroup',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 11,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    'input',
                    {
                      className: 'inputField',
                      type: 'password',
                      name: 'password-confirm',
                      placeholder: 'Confirm passoword',
                      ref: passwordConfirmRef,
                      required: true,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 13,
                      },
                    },
                  ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'input',
                  {
                    className: 'button',
                    disabled: loading,
                    type: 'submit',
                    value: 'Submit',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 11,
                    },
                  },
                ),
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'div',
                {
                  className: 'links',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 9,
                  },
                },
                'Need an account? ',
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_4__['Link'],
                  {
                    to: '/',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 28,
                    },
                  },
                  'Log \xEDn',
                ),
                ' ',
              ),
            ),
          );
        }

        /***/
      },

    /***/ './src/components/login/SignupDetails.js':
      /*!***********************************************!*\
  !*** ./src/components/login/SignupDetails.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return SignupDetails;
          },
        );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../firebase */ './src/firebase.js');
        /* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../context/AuthContext */ './src/context/AuthContext.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );
        /* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! firebase/firestore */ './node_modules/firebase/firestore/dist/esm/index.esm.js',
          );

        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/components/login/SignupDetails.js';

        function SignupDetails() {
          var _useAuth = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__['useAuth'],
            )(),
            currentUser = _useAuth.currentUser;
          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState2 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState, 2),
            firstName = _useState2[0],
            setFirstName = _useState2[1];
          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState4 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState3, 2),
            lastName = _useState4[0],
            setLastName = _useState4[1];
          var _useState5 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState6 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState5, 2),
            profilePicture = _useState6[0],
            setProfilePicture = _useState6[1];
          var _useState7 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState8 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState7, 2),
            bio = _useState8[0],
            setBio = _useState8[1];
          var _useState9 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState10 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState9, 2),
            city = _useState10[0],
            setCity = _useState10[1];
          var _useState11 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState12 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState11, 2),
            age = _useState12[0],
            setAge = _useState12[1];
          var _useState13 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState14 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState13, 2),
            gender = _useState14[0],
            setGender = _useState14[1];
          var email = currentUser.email;
          var uid = currentUser.uid;
          var navigate = Object(
            react_router_dom__WEBPACK_IMPORTED_MODULE_4__['useNavigate'],
          )();
          var handleSubmit = function handleSubmit(event) {
            event.preventDefault();
            Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_5__['setDoc'])(
              Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_5__['doc'])(
                _firebase__WEBPACK_IMPORTED_MODULE_2__['db'],
                'users',
                uid,
              ),
              {
                name: firstName,
                surname: lastName,
                email: email,
                profilePicture: profilePicture,
                bio: bio,
                points: 0,
                city: city,
                age: age,
                gender: gender,
              },
            );
            setFirstName('');
            setLastName('');
            setProfilePicture('');
            setBio('');
            setCity('');
            setAge('');
            setGender('');
            navigate('/home');
          };
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'form',
            {
              onSubmit: handleSubmit,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'firstName',
                  name: 'firstName',
                  value: firstName,
                  placeholder: 'First Name',
                  onChange: function onChange(event) {
                    return setFirstName(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'lastName',
                  name: 'lastName',
                  value: lastName,
                  placeholder: 'Last Name',
                  onChange: function onChange(event) {
                    return setLastName(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'bio',
                  name: 'bio',
                  value: bio,
                  placeholder: 'Bio',
                  onChange: function onChange(event) {
                    return setBio(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'city',
                  name: 'city',
                  value: city,
                  placeholder: 'City',
                  onChange: function onChange(event) {
                    return setCity(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'number',
                  id: 'age',
                  name: 'age',
                  value: age,
                  placeholder: 'Age',
                  onChange: function onChange(event) {
                    return setAge(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'gender',
                  name: 'gender',
                  value: gender,
                  placeholder: 'Gender',
                  onChange: function onChange(event) {
                    return setGender(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'form-group',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'text',
                  id: 'profilePicture',
                  name: 'profilePicture',
                  value: profilePicture,
                  placeholder: 'Profile picture url',
                  onChange: function onChange(event) {
                    return setProfilePicture(event.target.value);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'input',
              {
                //disabled={loading}
                className: 'form-btn',
                type: 'submit',
                value: 'Submit',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 7,
                },
              },
            ),
          );
        }

        /***/
      },

    /***/ './src/components/nav/PrivateRoute.js':
      /*!********************************************!*\
  !*** ./src/components/nav/PrivateRoute.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return PrivateRoute;
          },
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );
        /* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../context/AuthContext */ './src/context/AuthContext.js',
          );
        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/components/nav/PrivateRoute.js';

        function PrivateRoute() {
          var _useAuth = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__['useAuth'],
            )(),
            currentUser = _useAuth.currentUser;
          return currentUser
            ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_1__['Outlet'],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7,
                    columnNumber: 24,
                  },
                },
              )
            : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_1__['Navigate'],
                {
                  to: '/',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7,
                    columnNumber: 37,
                  },
                },
              );
        }

        /***/
      },

    /***/ './src/components/profile/Dashboard.js':
      /*!*********************************************!*\
  !*** ./src/components/profile/Dashboard.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Dashboard;
          },
        );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js',
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../context/AuthContext */ './src/context/AuthContext.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );

        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/components/profile/Dashboard.js';
        function _regeneratorRuntime() {
          'use strict';
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return exports;
            };
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty =
              Object.defineProperty ||
              function (obj, key, desc) {
                obj[key] = desc.value;
              },
            $Symbol = 'function' == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || '@@iterator',
            asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
            toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, '');
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator =
                outerFn && outerFn.prototype instanceof Generator
                  ? outerFn
                  : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, '_invoke', {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return { type: 'normal', arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: 'throw', arg: err };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype =
              getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ['next', 'throw', 'return'].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ('throw' !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value &&
                  'object' == typeof value &&
                  hasOwn.call(value, '__await')
                  ? PromiseImpl.resolve(value.__await).then(
                      function (value) {
                        invoke('next', value, resolve, reject);
                      },
                      function (err) {
                        invoke('throw', err, resolve, reject);
                      },
                    )
                  : PromiseImpl.resolve(value).then(
                      function (unwrapped) {
                        (result.value = unwrapped), resolve(result);
                      },
                      function (error) {
                        return invoke('throw', error, resolve, reject);
                      },
                    );
              }
              reject(record.arg);
            }
            var previousPromise;
            defineProperty(this, '_invoke', {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            var state = 'suspendedStart';
            return function (method, arg) {
              if ('executing' === state)
                throw new Error('Generator is already running');
              if ('completed' === state) {
                if ('throw' === method) throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if ('next' === context.method)
                  context.sent = context._sent = context.arg;
                else if ('throw' === context.method) {
                  if ('suspendedStart' === state)
                    throw ((state = 'completed'), context.arg);
                  context.dispatchException(context.arg);
                } else
                  'return' === context.method &&
                    context.abrupt('return', context.arg);
                state = 'executing';
                var record = tryCatch(innerFn, self, context);
                if ('normal' === record.type) {
                  if (
                    ((state = context.done ? 'completed' : 'suspendedYield'),
                    record.arg === ContinueSentinel)
                  )
                    continue;
                  return { value: record.arg, done: context.done };
                }
                'throw' === record.type &&
                  ((state = 'completed'),
                  (context.method = 'throw'),
                  (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var methodName = context.method,
              method = delegate.iterator[methodName];
            if (undefined === method)
              return (
                (context.delegate = null),
                ('throw' === methodName &&
                  delegate.iterator.return &&
                  ((context.method = 'return'),
                  (context.arg = undefined),
                  maybeInvokeDelegate(delegate, context),
                  'throw' === context.method)) ||
                  ('return' !== methodName &&
                    ((context.method = 'throw'),
                    (context.arg = new TypeError(
                      "The iterator does not provide a '" +
                        methodName +
                        "' method",
                    )))),
                ContinueSentinel
              );
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ('throw' === record.type)
              return (
                (context.method = 'throw'),
                (context.arg = record.arg),
                (context.delegate = null),
                ContinueSentinel
              );
            var info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  'return' !== context.method &&
                    ((context.method = 'next'), (context.arg = undefined)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = 'throw'),
                (context.arg = new TypeError(
                  'iterator result is not an object',
                )),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs &&
                ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            (record.type = 'normal'),
              delete record.arg,
              (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [{ tryLoc: 'root' }]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ('function' == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length; ) {
                      if (hasOwn.call(iterable, i))
                        return (
                          (next.value = iterable[i]), (next.done = !1), next
                        );
                    }
                    return (next.value = undefined), (next.done = !0), next;
                  };
                return (next.next = next);
              }
            }
            return { next: doneResult };
          }
          function doneResult() {
            return { value: undefined, done: !0 };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, 'constructor', {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, 'constructor', {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              'GeneratorFunction',
            )),
            (exports.isGeneratorFunction = function (genFun) {
              var ctor = 'function' == typeof genFun && genFun.constructor;
              return (
                !!ctor &&
                (ctor === GeneratorFunction ||
                  'GeneratorFunction' === (ctor.displayName || ctor.name))
              );
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define(genFun, toStringTagSymbol, 'GeneratorFunction')),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return { __await: arg };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (
              innerFn,
              outerFn,
              self,
              tryLocsList,
              PromiseImpl,
            ) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              var iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList),
                PromiseImpl,
              );
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                  });
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, 'Generator'),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, 'toString', function () {
              return '[object Generator]';
            }),
            (exports.keys = function (val) {
              var object = Object(val),
                keys = [];
              for (var key in object) {
                keys.push(key);
              }
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    var key = keys.pop();
                    if (key in object)
                      return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = undefined),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = undefined),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (var name in this) {
                    't' === name.charAt(0) &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = undefined);
                  }
              },
              stop: function stop() {
                this.done = !0;
                var rootRecord = this.tryEntries[0].completion;
                if ('throw' === rootRecord.type) throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = 'throw'),
                    (record.arg = exception),
                    (context.next = loc),
                    caught &&
                      ((context.method = 'next'), (context.arg = undefined)),
                    !!caught
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i],
                    record = entry.completion;
                  if ('root' === entry.tryLoc) return handle('end');
                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, 'catchLoc'),
                      hasFinally = hasOwn.call(entry, 'finallyLoc');
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally)
                        throw new Error(
                          'try statement without catch or finally',
                        );
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, 'finallyLoc') &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  ('break' === type || 'continue' === type) &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = 'next'),
                      (this.next = finallyEntry.finallyLoc),
                      ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function complete(record, afterLoc) {
                if ('throw' === record.type) throw record.arg;
                return (
                  'break' === record.type || 'continue' === record.type
                    ? (this.next = record.arg)
                    : 'return' === record.type
                    ? ((this.rval = this.arg = record.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === record.type &&
                      afterLoc &&
                      (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function finish(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return (
                      this.complete(entry.completion, entry.afterLoc),
                      resetTryEntry(entry),
                      ContinueSentinel
                    );
                }
              },
              catch: function _catch(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ('throw' === record.type) {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(
                iterable,
                resultName,
                nextLoc,
              ) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc,
                  }),
                  'next' === this.method && (this.arg = undefined),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }

        function Dashboard() {
          var _useAuth = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__['useAuth'],
            )(),
            logout = _useAuth.logout;
          var navigate = Object(
            react_router_dom__WEBPACK_IMPORTED_MODULE_3__['useNavigate'],
          )();
          var _useAuth2 = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__['useAuth'],
            )(),
            currentUser = _useAuth2.currentUser;
          function handleLogout(_x) {
            return _handleLogout.apply(this, arguments);
          }
          function _handleLogout() {
            _handleLogout = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(e) {
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          e.preventDefault();
                          _context.prev = 1;
                          _context.next = 4;
                          return logout();
                        case 4:
                          navigate('/login');
                          _context.next = 10;
                          break;
                        case 7:
                          _context.prev = 7;
                          _context.t0 = _context['catch'](1);
                          console.log(_context.t0.code + _context.t0.message);
                        case 10:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  null,
                  [[1, 7]],
                );
              }),
            );
            return _handleLogout.apply(this, arguments);
          }
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'h2',
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 7,
                },
              },
              'Dashboard',
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'strong',
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 7,
                },
              },
              'Email:',
            ),
            ' ',
            currentUser.email,
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'strong',
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 7,
                },
              },
              'Email:',
            ),
            ' ',
            currentUser.uid,
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_3__['Link'],
              {
                to: '/updateProfile',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 7,
                },
              },
              'Update profile',
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'button',
              {
                className: '',
                onClick: handleLogout,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 7,
                },
              },
              'Log out',
              ' ',
            ),
          );
        }

        /***/
      },

    /***/ './src/components/profile/Profile.js':
      /*!*******************************************!*\
  !*** ./src/components/profile/Profile.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Profile;
          },
        );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js',
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../context/AuthContext */ './src/context/AuthContext.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );
        /* harmony import */ var _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../textComponents/Heading1 */ './src/components/textComponents/Heading1.js',
          );
        /* harmony import */ var _textComponents_Heading5__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../textComponents/Heading5 */ './src/components/textComponents/Heading5.js',
          );
        /* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! react-icons/md */ './node_modules/react-icons/md/index.esm.js',
          );
        /* harmony import */ var _atomics_TagsSection__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../atomics/TagsSection */ './src/components/atomics/TagsSection.js',
          );
        /* harmony import */ var _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../textComponents/BodyText */ './src/components/textComponents/BodyText.js',
          );
        /* harmony import */ var _atomics_CategorySection__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../atomics/CategorySection */ './src/components/atomics/CategorySection.js',
          );
        /* harmony import */ var _ad_test_jpg__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! ../../ad_test.jpg */ './src/ad_test.jpg');
        /* harmony import */ var _ad_test_jpg__WEBPACK_IMPORTED_MODULE_10___default =
          /*#__PURE__*/ __webpack_require__.n(
            _ad_test_jpg__WEBPACK_IMPORTED_MODULE_10__,
          );
        /* harmony import */ var _atomics_Button__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../atomics/Button */ './src/components/atomics/Button.js',
          );

        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/components/profile/Profile.js';
        function _regeneratorRuntime() {
          'use strict';
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return exports;
            };
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty =
              Object.defineProperty ||
              function (obj, key, desc) {
                obj[key] = desc.value;
              },
            $Symbol = 'function' == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || '@@iterator',
            asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
            toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, '');
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator =
                outerFn && outerFn.prototype instanceof Generator
                  ? outerFn
                  : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, '_invoke', {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return { type: 'normal', arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: 'throw', arg: err };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype =
              getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ['next', 'throw', 'return'].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ('throw' !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value &&
                  'object' == typeof value &&
                  hasOwn.call(value, '__await')
                  ? PromiseImpl.resolve(value.__await).then(
                      function (value) {
                        invoke('next', value, resolve, reject);
                      },
                      function (err) {
                        invoke('throw', err, resolve, reject);
                      },
                    )
                  : PromiseImpl.resolve(value).then(
                      function (unwrapped) {
                        (result.value = unwrapped), resolve(result);
                      },
                      function (error) {
                        return invoke('throw', error, resolve, reject);
                      },
                    );
              }
              reject(record.arg);
            }
            var previousPromise;
            defineProperty(this, '_invoke', {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            var state = 'suspendedStart';
            return function (method, arg) {
              if ('executing' === state)
                throw new Error('Generator is already running');
              if ('completed' === state) {
                if ('throw' === method) throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if ('next' === context.method)
                  context.sent = context._sent = context.arg;
                else if ('throw' === context.method) {
                  if ('suspendedStart' === state)
                    throw ((state = 'completed'), context.arg);
                  context.dispatchException(context.arg);
                } else
                  'return' === context.method &&
                    context.abrupt('return', context.arg);
                state = 'executing';
                var record = tryCatch(innerFn, self, context);
                if ('normal' === record.type) {
                  if (
                    ((state = context.done ? 'completed' : 'suspendedYield'),
                    record.arg === ContinueSentinel)
                  )
                    continue;
                  return { value: record.arg, done: context.done };
                }
                'throw' === record.type &&
                  ((state = 'completed'),
                  (context.method = 'throw'),
                  (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var methodName = context.method,
              method = delegate.iterator[methodName];
            if (undefined === method)
              return (
                (context.delegate = null),
                ('throw' === methodName &&
                  delegate.iterator.return &&
                  ((context.method = 'return'),
                  (context.arg = undefined),
                  maybeInvokeDelegate(delegate, context),
                  'throw' === context.method)) ||
                  ('return' !== methodName &&
                    ((context.method = 'throw'),
                    (context.arg = new TypeError(
                      "The iterator does not provide a '" +
                        methodName +
                        "' method",
                    )))),
                ContinueSentinel
              );
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ('throw' === record.type)
              return (
                (context.method = 'throw'),
                (context.arg = record.arg),
                (context.delegate = null),
                ContinueSentinel
              );
            var info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  'return' !== context.method &&
                    ((context.method = 'next'), (context.arg = undefined)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = 'throw'),
                (context.arg = new TypeError(
                  'iterator result is not an object',
                )),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs &&
                ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            (record.type = 'normal'),
              delete record.arg,
              (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [{ tryLoc: 'root' }]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ('function' == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length; ) {
                      if (hasOwn.call(iterable, i))
                        return (
                          (next.value = iterable[i]), (next.done = !1), next
                        );
                    }
                    return (next.value = undefined), (next.done = !0), next;
                  };
                return (next.next = next);
              }
            }
            return { next: doneResult };
          }
          function doneResult() {
            return { value: undefined, done: !0 };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, 'constructor', {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, 'constructor', {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              'GeneratorFunction',
            )),
            (exports.isGeneratorFunction = function (genFun) {
              var ctor = 'function' == typeof genFun && genFun.constructor;
              return (
                !!ctor &&
                (ctor === GeneratorFunction ||
                  'GeneratorFunction' === (ctor.displayName || ctor.name))
              );
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define(genFun, toStringTagSymbol, 'GeneratorFunction')),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return { __await: arg };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (
              innerFn,
              outerFn,
              self,
              tryLocsList,
              PromiseImpl,
            ) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              var iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList),
                PromiseImpl,
              );
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                  });
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, 'Generator'),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, 'toString', function () {
              return '[object Generator]';
            }),
            (exports.keys = function (val) {
              var object = Object(val),
                keys = [];
              for (var key in object) {
                keys.push(key);
              }
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    var key = keys.pop();
                    if (key in object)
                      return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = undefined),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = undefined),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (var name in this) {
                    't' === name.charAt(0) &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = undefined);
                  }
              },
              stop: function stop() {
                this.done = !0;
                var rootRecord = this.tryEntries[0].completion;
                if ('throw' === rootRecord.type) throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = 'throw'),
                    (record.arg = exception),
                    (context.next = loc),
                    caught &&
                      ((context.method = 'next'), (context.arg = undefined)),
                    !!caught
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i],
                    record = entry.completion;
                  if ('root' === entry.tryLoc) return handle('end');
                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, 'catchLoc'),
                      hasFinally = hasOwn.call(entry, 'finallyLoc');
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally)
                        throw new Error(
                          'try statement without catch or finally',
                        );
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, 'finallyLoc') &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  ('break' === type || 'continue' === type) &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = 'next'),
                      (this.next = finallyEntry.finallyLoc),
                      ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function complete(record, afterLoc) {
                if ('throw' === record.type) throw record.arg;
                return (
                  'break' === record.type || 'continue' === record.type
                    ? (this.next = record.arg)
                    : 'return' === record.type
                    ? ((this.rval = this.arg = record.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === record.type &&
                      afterLoc &&
                      (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function finish(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return (
                      this.complete(entry.completion, entry.afterLoc),
                      resetTryEntry(entry),
                      ContinueSentinel
                    );
                }
              },
              catch: function _catch(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ('throw' === record.type) {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(
                iterable,
                resultName,
                nextLoc,
              ) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc,
                  }),
                  'next' === this.method && (this.arg = undefined),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }

        var ads = [
          {
            id: 1,
            title: 'Baka hos mig',
            description: 'Kom och baka',
            image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
            location: 'Skultunaparken',
            date: '20 november',
            points: 23,
          },
          {
            id: 2,
            title: 'snickra hos mig',
            description: 'Kom och baka',
            image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
            location: 'Skultunaparken',
            date: '20 november',
            points: 23,
          },
          {
            id: 3,
            title: 'snickra hos mig',
            description: 'Kom och baka',
            image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
            location: 'Skultunaparken',
            date: '20 november',
            points: 23,
          },
          {
            id: 4,
            title: 'snickra hos mig',
            description: 'Kom och baka',
            image: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
            location: 'Skultunaparken',
            date: '20 november',
            points: 23,
          },
        ];
        var tags = [
          {
            id: 1,
            tagName: 'Stickning',
          },
          {
            id: 2,
            tagName: 'Måla',
          },
          {
            id: 3,
            tagName: 'Motorcross',
          },
          {
            id: 4,
            tagName: 'Fest',
          },
          {
            id: 5,
            tagName: 'Snickeri',
          },
          {
            id: 6,
            tagName: 'Bakning',
          },
        ];
        var bio =
          'Hej mitt namn är Carina och jag är nyligen pensionerad. Jag har alltid haft en passion för bakning och snickeri och nu när jag är pensionerad så vill jag gärna dela med mig av mina kunskper. ';
        function Profile() {
          var _useAuth = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__['useAuth'],
            )(),
            logout = _useAuth.logout;
          var navigate = Object(
            react_router_dom__WEBPACK_IMPORTED_MODULE_3__['useNavigate'],
          )();
          var _useAuth2 = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__['useAuth'],
            )(),
            currentUser = _useAuth2.currentUser; // kod som kollar om man själv är current User
          var age = 65;
          var place = 'Umeå';
          function handleLogout(_x) {
            return _handleLogout.apply(this, arguments);
          }
          function _handleLogout() {
            _handleLogout = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(e) {
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          e.preventDefault();
                          _context.prev = 1;
                          _context.next = 4;
                          return logout();
                        case 4:
                          navigate('/login');
                          _context.next = 10;
                          break;
                        case 7:
                          _context.prev = 7;
                          _context.t0 = _context['catch'](1);
                          console.log(_context.t0.code + _context.t0.message);
                        case 10:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  null,
                  [[1, 7]],
                );
              }),
            );
            return _handleLogout.apply(this, arguments);
          }
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            {
              className: 'profilePage',
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'nameAndPicture',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'img',
                {
                  className: 'profilePicture',
                  src: _ad_test_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 9,
                  },
                },
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_4__[
                  'default'
                ],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 9,
                  },
                },
                currentUser.email,
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'profileShortInfo',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _textComponents_Heading5__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 9,
                  },
                },
                age,
                ' \xE5r ',
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _textComponents_Heading5__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 9,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  react_icons_md__WEBPACK_IMPORTED_MODULE_6__[
                    'MdOutlineLocationOn'
                  ],
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 11,
                    },
                  },
                ),
                ' ',
                place,
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _atomics_TagsSection__WEBPACK_IMPORTED_MODULE_7__['default'],
              {
                tags: tags,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 7,
                },
              },
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_8__['default'],
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 7,
                },
              },
              bio,
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _atomics_CategorySection__WEBPACK_IMPORTED_MODULE_9__['default'],
              {
                ads: ads,
                category: 'Aktuella annonser',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 7,
                },
              },
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'strong',
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 7,
                },
              },
              'Email:',
            ),
            ' ',
            currentUser.email,
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_3__['Link'],
              {
                to: '/updateProfile',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 7,
                },
              },
              'Update profile',
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'button',
              {
                className: 'button',
                onClick: handleLogout,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 7,
                },
              },
              'Log out',
              ' ',
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'buttonSticky',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 7,
                },
              },
              ' ',
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _atomics_Button__WEBPACK_IMPORTED_MODULE_11__['default'],
                {
                  className: 'buttonSticky',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 9,
                  },
                },
                'Kontakta annons\xF6r',
              ),
            ),
          );
        }

        /***/
      },

    /***/ './src/components/profile/UpdateProfile.js':
      /*!*************************************************!*\
  !*** ./src/components/profile/UpdateProfile.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return UpdateProfile;
          },
        );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../context/AuthContext */ './src/context/AuthContext.js',
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router-dom/dist/index.js',
          );

        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/components/profile/UpdateProfile.js';

        function UpdateProfile() {
          var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_1__['useRef'])();
          var passwordRef = Object(
            react__WEBPACK_IMPORTED_MODULE_1__['useRef'],
          )();
          var passwordConfirmRef = Object(
            react__WEBPACK_IMPORTED_MODULE_1__['useRef'],
          )();
          var _useAuth = Object(
              _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__['useAuth'],
            )(),
            currentUser = _useAuth.currentUser,
            updateUserEmail = _useAuth.updateUserEmail,
            updateUserPassword = _useAuth.updateUserPassword;
          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(''),
            _useState2 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState, 2),
            error = _useState2[0],
            setError = _useState2[1];
          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(false),
            _useState4 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState3, 2),
            loading = _useState4[0],
            setLoading = _useState4[1];
          var navigate = Object(
            react_router_dom__WEBPACK_IMPORTED_MODULE_3__['useNavigate'],
          )();
          function handleSubmit(e) {
            e.preventDefault();
            if (
              passwordRef.current.value !== passwordConfirmRef.current.value
            ) {
              return setError('Password do not match');
            }
            var promises = [];
            setLoading(true);
            if (emailRef.current.value !== currentUser.email) {
              promises.push(updateUserEmail(emailRef.current.value));
            }
            if (passwordRef.current.value) {
              promises.push(updateUserPassword(passwordRef.current.value));
            }
            Promise.all(promises)
              .then(function () {
                navigate('/dashboard');
              })
              .catch(function (error) {
                setError(error.code + error.message);
              })
              .finally(function () {
                setLoading(false);
              });
          }
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
            null,
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'h2',
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 9,
                  },
                },
                'Update Profile',
              ),
              error &&
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'p',
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 19,
                    },
                  },
                  error,
                ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'form',
                {
                  onSubmit: handleSubmit,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 9,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'div',
                  {
                    className: 'form-group',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 11,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'input',
                    {
                      type: 'email',
                      name: 'email',
                      defaultValue: currentUser.email,
                      ref: emailRef,
                      required: true,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 13,
                      },
                    },
                  ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'div',
                  {
                    className: 'form-group',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 11,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'input',
                    {
                      type: 'password',
                      name: 'password',
                      placeholder: 'Leave blank to keep the same',
                      ref: passwordRef,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58,
                        columnNumber: 13,
                      },
                    },
                  ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'div',
                  {
                    className: 'form-group',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 11,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'input',
                    {
                      type: 'password',
                      name: 'password-confirm',
                      placeholder: 'Leave blank to keep the same',
                      ref: passwordConfirmRef,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 13,
                      },
                    },
                  ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'input',
                  {
                    disabled: loading,
                    className: 'form-btn',
                    type: 'submit',
                    value: 'Submit',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 11,
                    },
                  },
                ),
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 9,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_3__['Link'],
                  {
                    to: '/dashboard',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 11,
                    },
                  },
                  'Cancel',
                ),
                ' ',
              ),
            ),
          );
        }

        /***/
      },

    /***/ './src/components/shop/Deal.js':
      /*!*************************************!*\
  !*** ./src/components/shop/Deal.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../textComponents/BodyText */ './src/components/textComponents/BodyText.js',
          );
        /* harmony import */ var _textComponents_Heading4__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../textComponents/Heading4 */ './src/components/textComponents/Heading4.js',
          );
        /* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-icons/md */ './node_modules/react-icons/md/index.esm.js',
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/shop/Deal.js';

        var DealCard = function DealCard(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'dealCard',
              onClick: props.onClickFunction,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'dealCardImgContainer',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9,
                  columnNumber: 7,
                },
              },
              ' ',
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'img',
                {
                  src: props.deal.image,
                  alt: 'deal',
                  className: 'adCardImage',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'textContentDeal',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _textComponents_Heading4__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ],
                {
                  className: 'title',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 9,
                  },
                },
                props.deal.title,
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 9,
                  },
                },
                props.deal.description,
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: 'iconText',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                    columnNumber: 9,
                  },
                },
                ' ',
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_icons_md__WEBPACK_IMPORTED_MODULE_3__['MdStarOutline'],
                  {
                    className: 'icon',
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 11,
                    },
                  },
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _textComponents_BodyText__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ],
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19,
                      columnNumber: 11,
                    },
                  },
                  props.deal.points,
                  ' po\xE4ng',
                ),
              ),
            ),
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = DealCard;

        /***/
      },

    /***/ './src/components/shop/Points.js':
      /*!***************************************!*\
  !*** ./src/components/shop/Points.js ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _textComponents_Heading3__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../textComponents/Heading3 */ './src/components/textComponents/Heading3.js',
          );
        /* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-icons/md */ './node_modules/react-icons/md/index.esm.js',
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/shop/Points.js';

        var PointsSection = function PointsSection(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'pointsSection',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _textComponents_Heading3__WEBPACK_IMPORTED_MODULE_1__['default'],
              {
                className: 'title',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8,
                  columnNumber: 7,
                },
              },
              'Dina po\xE4ng',
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'points',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9,
                  columnNumber: 7,
                },
              },
              ' ',
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_icons_md__WEBPACK_IMPORTED_MODULE_2__['MdStarOutline'],
                {
                  className: 'iconPoints',
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11,
                    columnNumber: 9,
                  },
                },
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _textComponents_Heading3__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 9,
                  },
                },
                props.user.points,
                ' po\xE4ng',
              ),
            ),
          );
        };
        /* harmony default export */ __webpack_exports__['default'] =
          PointsSection;

        /***/
      },

    /***/ './src/components/shop/Shop.js':
      /*!*************************************!*\
  !*** ./src/components/shop/Shop.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _Deal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./Deal */ './src/components/shop/Deal.js');
        /* harmony import */ var _coop_png__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../coop.png */ './src/coop.png');
        /* harmony import */ var _coop_png__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _coop_png__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _Points__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./Points */ './src/components/shop/Points.js',
          );
        /* harmony import */ var _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../textComponents/Heading1 */ './src/components/textComponents/Heading1.js',
          );
        /* harmony import */ var _atomics_SearchField__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../atomics/SearchField */ './src/components/atomics/SearchField.js',
          );
        /* harmony import */ var _atomics_Button__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../atomics/Button */ './src/components/atomics/Button.js',
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/shop/Shop.js';

        var deal = {
          title: 'Rabatt på coop',
          description:
            'bla bla bla, så här mycket rabbat kan du få på hela sortimentet',
          points: 24,
          image: _coop_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        };
        var user = {
          points: 245,
        };
        var Shop = function Shop() {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'shop',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 5,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Points__WEBPACK_IMPORTED_MODULE_3__['default'],
              {
                user: user,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 7,
                },
              },
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'dealsSection',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _textComponents_Heading1__WEBPACK_IMPORTED_MODULE_4__[
                  'default'
                ],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                    columnNumber: 9,
                  },
                },
                'Anv\xE4nd dina po\xE4ng',
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _atomics_SearchField__WEBPACK_IMPORTED_MODULE_5__['default'],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 9,
                  },
                },
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Deal__WEBPACK_IMPORTED_MODULE_1__['default'],
                {
                  deal: deal,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 9,
                  },
                },
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Deal__WEBPACK_IMPORTED_MODULE_1__['default'],
                {
                  deal: deal,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 9,
                  },
                },
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Deal__WEBPACK_IMPORTED_MODULE_1__['default'],
                {
                  deal: deal,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 9,
                  },
                },
              ),
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'buttonSticky',
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _atomics_Button__WEBPACK_IMPORTED_MODULE_6__['default'],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 9,
                  },
                },
                'Skaffa fler po\xE4ng',
              ),
            ),
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = Shop;

        /***/
      },

    /***/ './src/components/textComponents/BodyText.js':
      /*!***************************************************!*\
  !*** ./src/components/textComponents/BodyText.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/textComponents/BodyText.js';

        var BodyText = function BodyText(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'p',
            {
              className: 'bodyText',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 4,
                columnNumber: 10,
              },
            },
            ' ',
            children,
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = BodyText;

        /***/
      },

    /***/ './src/components/textComponents/Heading1.js':
      /*!***************************************************!*\
  !*** ./src/components/textComponents/Heading1.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/textComponents/Heading1.js';

        var Heading1 = function Heading1(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h1',
            {
              className: 'heading1',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 4,
                columnNumber: 10,
              },
            },
            ' ',
            children,
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = Heading1;

        /***/
      },

    /***/ './src/components/textComponents/Heading3.js':
      /*!***************************************************!*\
  !*** ./src/components/textComponents/Heading3.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/textComponents/Heading3.js';

        var Heading3 = function Heading3(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h3',
            {
              className: 'heading3',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 4,
                columnNumber: 10,
              },
            },
            ' ',
            children,
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = Heading3;

        /***/
      },

    /***/ './src/components/textComponents/Heading4.js':
      /*!***************************************************!*\
  !*** ./src/components/textComponents/Heading4.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/textComponents/Heading4.js';

        var Heading4 = function Heading4(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h4',
            {
              className: 'heading4',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 4,
                columnNumber: 10,
              },
            },
            ' ',
            children,
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = Heading4;

        /***/
      },

    /***/ './src/components/textComponents/Heading5.js':
      /*!***************************************************!*\
  !*** ./src/components/textComponents/Heading5.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        var _this = undefined,
          _jsxFileName =
            '/Users/signebennmarker/AgeTech/age-tech/src/components/textComponents/Heading5.js';

        var Heading5 = function Heading5(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h5',
            {
              className: 'heading5',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 4,
                columnNumber: 10,
              },
            },
            ' ',
            children,
          );
        };
        /* harmony default export */ __webpack_exports__['default'] = Heading5;

        /***/
      },

    /***/ './src/context/AuthContext.js':
      /*!************************************!*\
  !*** ./src/context/AuthContext.js ***!
  \************************************/
      /*! exports provided: useAuth, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'useAuth',
          function () {
            return useAuth;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return AuthProvider;
          },
        );
        /* harmony import */ var _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! firebase/auth */ './node_modules/firebase/auth/dist/esm/index.esm.js',
          );
        /* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../firebase */ './src/firebase.js');

        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/context/AuthContext.js';

        var AuthContext =
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
        function useAuth() {
          return Object(react__WEBPACK_IMPORTED_MODULE_1__['useContext'])(
            AuthContext,
          );
        }
        function AuthProvider(_ref) {
          var children = _ref.children;
          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(),
            _useState2 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState, 2),
            currentUser = _useState2[0],
            setCurrentUser = _useState2[1];
          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__['useState'],
            )(true),
            _useState4 = Object(
              _Users_signebennmarker_AgeTech_age_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ],
            )(_useState3, 2),
            loading = _useState4[0],
            setLoading = _useState4[1];
          function signup(email, password) {
            return Object(
              firebase_auth__WEBPACK_IMPORTED_MODULE_2__[
                'createUserWithEmailAndPassword'
              ],
            )(_firebase__WEBPACK_IMPORTED_MODULE_3__['auth'], email, password);
          }
          function login(email, password) {
            return Object(
              firebase_auth__WEBPACK_IMPORTED_MODULE_2__[
                'signInWithEmailAndPassword'
              ],
            )(_firebase__WEBPACK_IMPORTED_MODULE_3__['auth'], email, password);
          }
          function logout() {
            return Object(
              firebase_auth__WEBPACK_IMPORTED_MODULE_2__['signOut'],
            )(_firebase__WEBPACK_IMPORTED_MODULE_3__['auth']);
          }
          function resetPassword(email) {
            return Object(
              firebase_auth__WEBPACK_IMPORTED_MODULE_2__[
                'sendPasswordResetEmail'
              ],
            )(_firebase__WEBPACK_IMPORTED_MODULE_3__['auth'], email);
          }
          function updateUserEmail(email) {
            return Object(
              firebase_auth__WEBPACK_IMPORTED_MODULE_2__['updateEmail'],
            )(currentUser, email);
          }
          function updateUserPassword(password) {
            return Object(
              firebase_auth__WEBPACK_IMPORTED_MODULE_2__['updatePassword'],
            )(currentUser, password);
          }
          Object(react__WEBPACK_IMPORTED_MODULE_1__['useEffect'])(function () {
            var unsubscribe = _firebase__WEBPACK_IMPORTED_MODULE_3__[
              'auth'
            ].onAuthStateChanged(function (user) {
              setCurrentUser(user);
              setLoading(false);
            });
            return unsubscribe;
          }, []);
          var value = {
            currentUser: currentUser,
            signup: signup,
            login: login,
            logout: logout,
            resetPassword: resetPassword,
            updateUserEmail: updateUserEmail,
            updateUserPassword: updateUserPassword,
          };
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            AuthContext.Provider,
            {
              value: value,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 5,
              },
            },
            !loading && children,
          );
        }

        /***/
      },

    /***/ './src/coop.png':
      /*!**********************!*\
  !*** ./src/coop.png ***!
  \**********************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/coop.a84fe365.png';

        /***/
      },

    /***/ './src/css/main.css':
      /*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css',
        );

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../node_modules/style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js',
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css',
            function () {
              var newContent = __webpack_require__(
                /*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css',
              );

              if (typeof newContent === 'string')
                newContent = [[module.i, newContent, '']];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  'Aborting CSS HMR due to changed css-modules locals.',
                );

              update(newContent);
            },
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ './src/firebase.js':
      /*!*************************!*\
  !*** ./src/firebase.js ***!
  \*************************/
      /*! exports provided: auth, db, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'auth',
          function () {
            return auth;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'db',
          function () {
            return db;
          },
        );
        /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! firebase/app */ './node_modules/firebase/app/dist/esm/index.esm.js',
          );
        /* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! firebase/auth */ './node_modules/firebase/auth/dist/esm/index.esm.js',
          );
        /* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! firebase/firestore */ './node_modules/firebase/firestore/dist/esm/index.esm.js',
          );

        //import { getAnalytics } from 'firebase/analytics';
        //import firebase from 'firebase/app';

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
          apiKey: 'AIzaSyA38AO7LXYABrWrULP9SyrFhsfZacj8TR8',
          authDomain: 'age-tech-dev.firebaseapp.com',
          projectId: 'age-tech-dev',
          storageBucket: 'age-tech-dev.appspot.com',
          messagingSenderId: '987148733626',
          appId: '1:987148733626:web:9f2f41e2c9605d9f92c683',
          measurementId: 'G-TQV5YZJSMH',
        };

        // Initialize Firebase
        var app = Object(
          firebase_app__WEBPACK_IMPORTED_MODULE_0__['initializeApp'],
        )(firebaseConfig);
        //const analytics = getAnalytics(app);

        var auth = Object(
          firebase_auth__WEBPACK_IMPORTED_MODULE_1__['getAuth'],
        )(app);
        var db = Object(
          firebase_firestore__WEBPACK_IMPORTED_MODULE_2__['getFirestore'],
        )();
        /* harmony default export */ __webpack_exports__['default'] = app;

        /***/
      },

    /***/ './src/index.css':
      /*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css',
        );

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../node_modules/style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js',
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css',
            function () {
              var newContent = __webpack_require__(
                /*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css',
              );

              if (typeof newContent === 'string')
                newContent = [[module.i, newContent, '']];

              var locals = (function (a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  'Aborting CSS HMR due to changed css-modules locals.',
                );

              update(newContent);
            },
          );

          module.hot.dispose(function () {
            update();
          });
        }

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-dom/client */ './node_modules/react-dom/client.js',
          );
        /* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_dom_client__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./index.css */ './src/index.css');
        /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _index_css__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./App */ './src/App.js');
        /* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./reportWebVitals */ './src/reportWebVitals.js',
          );
        var _jsxFileName =
          '/Users/signebennmarker/AgeTech/age-tech/src/index.js';

        var root =
          react_dom_client__WEBPACK_IMPORTED_MODULE_1___default.a.createRoot(
            document.getElementById('root'),
          );
        root.render(
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode,
            {
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
                columnNumber: 3,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _App__WEBPACK_IMPORTED_MODULE_3__['default'],
              {
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10,
                  columnNumber: 5,
                },
              },
            ),
          ),
        );

        // If you want to start measuring performance in your app, pass a function
        // to log results (for example: reportWebVitals(console.log))
        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__['default'])();

        /***/
      },

    /***/ './src/reportWebVitals.js':
      /*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        var reportWebVitals = function reportWebVitals(onPerfEntry) {
          if (onPerfEntry && onPerfEntry instanceof Function) {
            __webpack_require__
              .e(/*! import() */ 1)
              .then(
                __webpack_require__.bind(
                  null,
                  /*! web-vitals */ './node_modules/web-vitals/dist/web-vitals.js',
                ),
              )
              .then(function (_ref) {
                var getCLS = _ref.getCLS,
                  getFID = _ref.getFID,
                  getFCP = _ref.getFCP,
                  getLCP = _ref.getLCP,
                  getTTFB = _ref.getTTFB;
                getCLS(onPerfEntry);
                getFID(onPerfEntry);
                getFCP(onPerfEntry);
                getLCP(onPerfEntry);
                getTTFB(onPerfEntry);
              });
          }
        };
        /* harmony default export */ __webpack_exports__['default'] =
          reportWebVitals;

        /***/
      },

    /***/ 0:
      /*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        __webpack_require__(
          /*! /Users/signebennmarker/AgeTech/age-tech/node_modules/react-dev-utils/webpackHotDevClient.js */ './node_modules/react-dev-utils/webpackHotDevClient.js',
        );
        module.exports = __webpack_require__(
          /*! /Users/signebennmarker/AgeTech/age-tech/src/index.js */ './src/index.js',
        );

        /***/
      },
  },
  [[0, 'runtime~main', 2]],
]);
//# sourceMappingURL=main.chunk.js.map
