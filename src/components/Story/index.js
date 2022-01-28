import React from "react";
import "./css/Story.css";

const Story = () => {
    return (
        <>
            <div className="w-100 d-flex flex-column align-items-center position-relative">
                <div className="PageStoryHeader d-flex flex-column justify-content-center align-items-center">
                    <span className="StoryHeader text-center">UNIQUE DIGITAL COLLECTABLES</span>
                    <span className="StoryDes px-3 text-center">Lorem ipsum dolor sit amet, consectetur adipisoing elit. Platea diam morbi non egestas placerat elit. Mauris sooiis dignissim
                        bibendum vivamus. Viverra ac dolor amet, id tortor pretium pulvinar ut. Sit accumsan vitae at sit tellus. Fermentum blandit mi
                        amet ullamcorper porta lacus lacinia dignissim malesuada. Elit nam orci ornare at rhoncus sit ullamcorper et. Ullamcorper magna</span>
                </div>
                <img className="position-absolute GreenImg" src="assets/Green.svg" alt="" />
            </div>
        </>
    )
}

export default Story;