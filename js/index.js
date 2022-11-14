let counter = 11;

let postIds = [];

//New Stories
const newStories = "https://hacker-news.firebaseio.com/v0/newstories.json";

//Particular items
const newsItem = "https://hacker-news.firebaseio.com/v0/item/";

const postList = document.querySelector("#postList");

//fetch Data
const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

//window onload
const onload = async () => {
  try {
    const data = await fetchData(newStories);
    if (!data) {
      const errorDiv = document.createElement("div");
      errorDiv.textContent = "No Data";
      postList.appendChild(errorDiv);
      return;
    }
    postIds = data;
    const dieci = postIds.slice(0, 10);
    dieci.map(async (d) => {
      try {
        const newsData = await fetchData(`${newsItem}${d}.json`);
        const post = {
          title: newsData.title,
          link: newsData.url,
          hour: newsData.time,
        };

        const dt = new Date(post.hour * 1000).toLocaleString();
        const listItem = document.createElement("li");
        const a = document.createElement("a");

        if (!post.title) {
          const errorDiv = document.createElement("div");
          errorDiv.textContent = "No title";
          postList.appendChild(errorDiv);
        }
        if (!post.link) {
          const errorDiv = document.createElement("p");
          errorDiv.textContent = "Next story's url is undefined!";
          postList.appendChild(listItem);
          postList.appendChild(errorDiv);
        }
        if (!post.hour) {
          const errorDiv = document.createElement("div");
          errorDiv.textContent = "No date";
          postList.appendChild(errorDiv);
          return;
        } else {
          a.textContent = post.link;
          listItem.textContent = `${post.title}; DATE: ${dt};`;
          a.setAttribute(`href`, post.link);
          postList.appendChild(listItem);
          postList.appendChild(a);
        }
      } catch {
        return;
      }
    });
  } catch (err) {
    const errorDiv = document.createElement("div");
    errorDiv.textContent = "No Data";
    postList.appendChild(errorDiv);
    return;
  }
};
//show Data
const showData = async () => {
  try {
    const data = await fetchData(newStories);
    if (!data) {
      const errorDiv = document.createElement("div");
      errorDiv.textContent = "No Data";
      postList.appendChild(errorDiv);
      return;
    }
    postIds = data;
    const nuovo = postIds.slice(counter, counter + 10);
    counter += 11;
    nuovo.map(async (d) => {
      try {
        const newsData = await fetchData(`${newsItem}${d}.json`);
        const post = {
          title: newsData.title,
          link: newsData.url,
          hour: newsData.time,
        };

        const dt = new Date(post.hour * 1000).toLocaleString();
        const a = document.createElement("a");
        const listItem = document.createElement("li");
        if (!post.title) {
          const errorDiv = document.createElement("div");
          errorDiv.textContent = "No title";
          postList.appendChild(errorDiv);
        }
        if (!post.link) {
          const errorDiv = document.createElement("p");
          errorDiv.textContent = "Next story's url is undefined!";
          postList.appendChild(listItem);
          postList.appendChild(errorDiv);
        }
        if (!post.hour) {
          const errorDiv = document.createElement("div");
          errorDiv.textContent = "No date";
          postList.appendChild(errorDiv);
        } else {
          a.textContent = post.link;
          listItem.textContent = `${post.title}; DATE: ${dt};`;
          a.setAttribute(`href`, post.link);
          listItem.appendChild(a);
          postList.appendChild(listItem);
          postList.appendChild(a);
        }
      } catch {
        return;
      }
    });
  } catch (err) {
    const errorDiv = document.createElement("div");
    errorDiv.textContent = "No Data";
    postList.appendChild(errorDiv);
    return;
  }
};

onload();
document.getElementById("listBtn").addEventListener("click", showData);
