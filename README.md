# Nancy's new market app

#### setting up

- npm create vite@latest nancyMarket -- --template react
- npm install -D tailwindcss postcss autoprefixer
- npm install react-router-dom
- npx tailwindcss init -p => for creating tailwindcss.config file and postcss.config.js file. NOTE: without -p, tailwindcss won't work.
  -- inside tailwind.config.cjs content: => [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}",]
  -- inside index.css, remove all, then add
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
- npm run dev
- npm install react-icons --save ==> for icons

#### steps

- ADD FOLDERS: add api,assets, pages and components folder under src folder, pages for routes.
- EASY ACCESS IMG: in assets folder, add all images, as well as an assetIndex.jsx to import all images and then export them in {}. This way it is easiler to import any images in other files.
- GOOGLE FONT: choose google fonts poppins and nunito sans, add to index.html, in tailwind.config, under theme - extend, add extend: {
  fontFamily: {
  bodyFont: 'Poppins',
  titleFont: 'Nunito Sans',
  },
  },
  for using the google fonts, classname should be font-bodyFont and font-titleFont.

- Add 'skin' colors in tailwindcss config file, extend - colors - skin - highlight:"#fff"
- Add Header.jsx
- In Home.jsx, the first component is Banner, which consists of several images that can rotate by the two buttons (carousel), for sliding images, use 400vw or use 'hidden' and 'block' both ok. I prefer the latter.
- In home.jsx, the second component is Products.jsx, useLoader is needed for save data and load data, so react-router-dom is installed.
- In home.jsx, the last component is Footer.jsx. --------TODO????? form should be <FORM> or not?????? -------
- make responsive ( make footer flex-col for below sm, header links to a hambuger)
- install axios for fetch data from fakestoreapi.com/products, loader is needed for <Home> to load data, so add a loader to Home route with aysnc()=>await axios.get(url), then useLoaderData() to get data in <Products>;
- display the data in a card format.
- install flowbite for easily to add tooltip when hover - I decided not to install this library but use relative/absolute with opacity to and nested group hover of tailwindcss to control the tooltips.
- Use <ScrollRestoration /> for home page auto scroll back to top after each refresh.
- clicking Home product's image navigate to <ProductDetail /> page, <Link state to> combined with useLocation() to pass stateful data to the linked product detailed page
- dynamic star ratings with css in <ProdjuctDetail> page. -> rounded rating, I will do the fractinal rating later.
- I didn't install redux toolkit for react store. npm install @reduxjs/toolkit react-redux react-redux - for state management (which is the cart data for this case). ==> Instead, I choose to use Context and Reducer for state management.

  > > To combine a reducer with context:
  > > Create the context.
  > > Put state and dispatch of useReducer() into context, create as many methods as the reducer switch statement has cases
  > > Use context anywhere needed by calling useContext()

- <Link to state> use state to pass along the props
- for responsive hamburger nav menu, useState(open,setOpen) with dynamically defined tailwindcss className to work out.
- add "add to cart" functionality in ProductCard component: sliding out the 'add to car' part: use flex with [div]s as children to wrap individual element, justify-center, translate x paired with duration, use 'absolute' for the sliding element

  > > <div className='absolute top-10 right-0 w-16 h-6 text-skin-bright_yellow bg-skin-base px-2 py-1 font-thin rounded-s-lg text-xs  flex overflow-hidden'>

     <div className='absolute -translate-x-32 group-hover:translate-x-0 duration-1000 flex justify-center'>
          <span >Add to cart</span>
        </div>

        <div className='w-16 flex justify-center translate-x-0 group-hover:translate-x-32 duration-1000'>
          <span >{rating.count} left</span>
        </div>
      </div>

- on ProductCard, when addtoCart, if id the same, change 'howmany' instead of add a new item in 'products'
- 'double precision floating number' makes the 'subtotal' check out payment in <Card> component has long decimal numbers, to avoid this, use integer instead => (item.price _ 100 _ item.howmany) / 100,
- add modal popup in productDetail page.
- SUPER! install react-toastify for message, add its css stylesheet onto main.jsx, use ToastContainer and toast to EASILY add popups/motals and can be self-closed by a controlled time.
- add 'tooltip' for the cart icon in productDetail page.
- for localStorage to store the cart state, in reducer initialState, use getItem('products') || []; in context, for all actions, use setItem to update the localStorage before call dispatch function, although this project I used 'action' in the place of 'dispatch'.
- create Login page, use Firebase for authentication => npm install firebase. Created UserContext and UserReducer to persist the User's state. In order to remember the login info of the user, use LocalStorage.setItem in useEffect() within UserContextProvider, so that each userInfo within the context changes , the localStorage will get set new User info.
- only after sign in can a user click and preceed with payment, the btn of checkout in Cart page needs to check if a user has logged in yet.
