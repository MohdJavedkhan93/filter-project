import React, {startTransition, useEffect, useState} from "react";
import Slider from "../components/Slider";
import About from "./About";
import Store from "./Store";
import Swal from 'sweetalert2'

    const dataItems = [
        { 
          id: 1,
          image: "sweets-1.jpeg",
          title: "sweet item",
          type: "sweets",
          price: 5,
        },
        {
          id: 2,
          image: "cupcake-1.jpeg",
          title: "cupcake item",
          type: "cupcakes",
          price: 5,
        },
        {
          id: 3,
          image: "cake-1.jpeg",
          title: "cake item",
          type: "cakes",
          price: 5,
        },
        {
          id: 4,
          image: "doughnut-1.jpeg",
          title: "dougnut item",
          type: "doughnuts",
          price: 5,
        },
        {
          id: 5,
          image: "sweets-2.jpeg",
          title: "sweet item",
          type: "sweets",
          price: 10,
        },
        {
          id: 6,
          image: "cupcake-2.jpeg",
          title: "cupcake item",
          type: "cupcakes",
          price: 10,
        },
        {
          id: 7,
          image: "cake-2.jpeg",
          title: "cake item",
          type: "cakes",
          price: 10,
        },
        {
          id: 8,
          image: "doughnut-2.jpeg",
          title: "dougnut item",
          type: "doughnuts",
          price: 10,
        },
        {
          id: 9,
          image: "sweets-3.jpeg",
          title: "sweet item",
          type: "sweets",
          price: 15,
        },
        {
          id: 10,
          image: "cupcake-3.jpeg",
          title: "cupcake item",
          type: "cupcakes",
          price: 15,
        },
        {
          id: 11,
          image: "cake-3.jpeg",
          title: "cake item",
          type: "cakes",
          price: 15,
        },
        {
          id: 12,
          image: "doughnut-3.jpeg",
          title: "doughnut item",
          type: "doughnuts",
          price: 15,
        },
        
      ];
      const Home = () => {
        const [items, setItems] = useState([]);
        useEffect(() => {
          setItems(dataItems);
        }, []);
      
        const filterItems = (e) => {
          e.preventDefault();
        const filter = e.target.dataset.filter;
        const filterItems = filter === "all" ? dataItems : dataItems.filter((item) => item.type ===filter);
        setItems(filterItems);
        };
        
        const searchItems = () => {
          const value = document.getElementById("search-item").value
          value.toLowerCase().trim();
          console.log(value)
          if(value === "") {
            Swal.fire({
              title: 'Error!',
              text: 'please write something to search',
              icon: 'error',
              confirmButtonText: 'ok'
            })
            // alert("please write something to search")
          }
          let filterItems = dataItems.filter((item) => item.type.includes(value))
          if(filterItems.length === 0) {
            Swal.fire({
              title: 'Error!',
              text: 'please search something which wrote in our store buttons',
              icon: 'error',
              confirmButtonText: 'ok'
            })
          }
          // console.log(filterItems)
          setItems(filterItems)
        
      }
    return(
        <>                
        <Slider />
        <About />
        <Store dataItems={items} onFilterItems={filterItems} 
        searchItems={searchItems} />
        </>

    )
}
export default Home