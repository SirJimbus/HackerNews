/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./js/index.js":
      /*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
      /***/ () => {
        eval(
          'let counter = 11;\r\n\r\nlet postIds = [];\r\n\r\n//New Stories\r\nconst newStories = "https://hacker-news.firebaseio.com/v0/newstories.json";\r\n\r\n//Particular items\r\nconst newsItem = "https://hacker-news.firebaseio.com/v0/item/";\r\n\r\nconst postList = document.querySelector("#postList");\r\n\r\n//fetch Data\r\nconst fetchData = (url) => {\r\n  return new Promise((resolve, reject) => {\r\n    fetch(url)\r\n      .then((res) => res.json())\r\n      .then((data) => resolve(data))\r\n      .catch((err) => reject(err));\r\n  });\r\n};\r\n\r\n//window onload\r\nconst onload = async () => {\r\n  try {\r\n    const data = await fetchData(newStories);\r\n    if (!data) {\r\n      const errorDiv = document.createElement("div");\r\n      errorDiv.textContent = "No Data";\r\n      postList.appendChild(errorDiv);\r\n      return;\r\n    }\r\n    postIds = data;\r\n    const dieci = postIds.slice(0, 10);\r\n    dieci.map(async (d) => {\r\n      try {\r\n        const newsData = await fetchData(`${newsItem}${d}.json`);\r\n        const post = {\r\n          title: newsData.title,\r\n          link: newsData.url,\r\n          hour: newsData.time,\r\n        };\r\n\r\n        const dt = new Date(post.hour * 1000).toLocaleString();\r\n        const listItem = document.createElement("li");\r\n        const a = document.createElement("a");\r\n\r\n        if (!post.title) {\r\n          const errorDiv = document.createElement("div");\r\n          errorDiv.textContent = "No title";\r\n          postList.appendChild(errorDiv);\r\n        }\r\n        if (!post.link) {\r\n          const errorDiv = document.createElement("p");\r\n          errorDiv.textContent = "Next story\'s url is undefined!";\r\n          postList.appendChild(listItem);\r\n          postList.appendChild(errorDiv);\r\n        }\r\n        if (!post.hour) {\r\n          const errorDiv = document.createElement("div");\r\n          errorDiv.textContent = "No date";\r\n          postList.appendChild(errorDiv);\r\n          return;\r\n        } else {\r\n          a.textContent = post.link;\r\n          listItem.textContent = `${post.title}; DATE: ${dt};`;\r\n          a.setAttribute(`href`, post.link);\r\n          postList.appendChild(listItem);\r\n          postList.appendChild(a);\r\n        }\r\n      } catch {\r\n        return;\r\n      }\r\n    });\r\n  } catch (err) {\r\n    const errorDiv = document.createElement("div");\r\n    errorDiv.textContent = "No Data";\r\n    postList.appendChild(errorDiv);\r\n    return;\r\n  }\r\n};\r\n//show Data\r\nconst showData = async () => {\r\n  try {\r\n    const data = await fetchData(newStories);\r\n    if (!data) {\r\n      const errorDiv = document.createElement("div");\r\n      errorDiv.textContent = "No Data";\r\n      postList.appendChild(errorDiv);\r\n      return;\r\n    }\r\n    postIds = data;\r\n    const nuovo = postIds.slice(counter, counter + 10);\r\n    counter += 11;\r\n    nuovo.map(async (d) => {\r\n      try {\r\n        const newsData = await fetchData(`${newsItem}${d}.json`);\r\n        const post = {\r\n          title: newsData.title,\r\n          link: newsData.url,\r\n          hour: newsData.time,\r\n        };\r\n\r\n        const dt = new Date(post.hour * 1000).toLocaleString();\r\n        const a = document.createElement("a");\r\n        const listItem = document.createElement("li");\r\n        if (!post.title) {\r\n          const errorDiv = document.createElement("div");\r\n          errorDiv.textContent = "No title";\r\n          postList.appendChild(errorDiv);\r\n        }\r\n        if (!post.link) {\r\n          const errorDiv = document.createElement("p");\r\n          errorDiv.textContent = "Next story\'s url is undefined!";\r\n          postList.appendChild(listItem);\r\n          postList.appendChild(errorDiv);\r\n        }\r\n        if (!post.hour) {\r\n          const errorDiv = document.createElement("div");\r\n          errorDiv.textContent = "No date";\r\n          postList.appendChild(errorDiv);\r\n        } else {\r\n          a.textContent = post.link;\r\n          listItem.textContent = `${post.title}; DATE: ${dt};`;\r\n          a.setAttribute(`href`, post.link);\r\n          listItem.appendChild(a);\r\n          postList.appendChild(listItem);\r\n          postList.appendChild(a);\r\n        }\r\n      } catch {\r\n        return;\r\n      }\r\n    });\r\n  } catch (err) {\r\n    const errorDiv = document.createElement("div");\r\n    errorDiv.textContent = "No Data";\r\n    postList.appendChild(errorDiv);\r\n    return;\r\n  }\r\n};\r\n\r\nonload();\r\ndocument.getElementById("listBtn").addEventListener("click", showData);\r\n\n\n//# sourceURL=webpack://hackernews/./js/index.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./js/index.js"]();
  /******/
  /******/
})();
