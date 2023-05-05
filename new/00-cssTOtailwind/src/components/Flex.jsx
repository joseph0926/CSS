import React from "react";

const Flex = () => {
  return (
    <div className="box-border w-full h-full flex flex-col items-center justify-center p-8 text-slate-700">
      <h1 className="text-purple-600 text-2xl font-bold">Flex-Project-Cost</h1>
      <div class="relative mt-4 bg-white w-full ">
        <div class="tabs">
          <p>Free</p>
          <p class="active">Team</p>
          <p>Professional</p>
          <p>Enterprise</p>
        </div>
        <div class="line"></div>
        <div class="toggle">
          <div class="range"></div>
          <div class="toggle-btn">
            <span>Mobile</span>
            <span>Web</span>
          </div>
          <div class="range"></div>
        </div>
        <div class="sessions-card">
          <p>Monthly Seesions</p>
          <p class="num">20,000</p>
        </div>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt aperiam ea blanditiis,ipsum dolor sit amet consectetur
          adipisicing elit. Optio nesciunt aperiam ea blanditiis,
        </p>
        <div class="slider">
          <div class="bar">
            <div class="progress"></div>
            <div class="point"></div>
          </div>
          <div class="scale">
            <ul>
              <li>0</li>
              <li>1K</li>
              <li>10K</li>
              <li>50K</li>
              <li>100K</li>
              <li>200K</li>
              <li>300K</li>
            </ul>
          </div>
        </div>
        <div class="cards">
          <div class="card">
            <div class="top-session">
              <p>Monthly Billing</p>
              <p class="price">$199</p>
              <p>Monthly</p>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, non!</p>
            <p>10 team members</p>
            <button>Try Free For 14 Days</button>
          </div>
          <div class="card">
            <div class="top-session">
              <p>Monthly Billing</p>
              <p class="price">$199</p>
              <p>Monthly</p>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, non!</p>
            <p>10 team members</p>
            <button>Try Free For 14 Days</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flex;
