import { AnimatePresence } from "framer-motion";
import { SlidesContentProps } from "./types";
import SlideContent from "./slide-content";

const SlidesContent: React.FC<SlidesContentProps> = ({ activeSlideIndex }) => {
    console.log("content rerendered");

    return (
        <AnimatePresence exitBeforeEnter>
            {activeSlideIndex === 0 && (
                <SlideContent
                    key="1"
                    title="Lorem ipsum dolor sit. 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae tincidunt semper"
                />
            )}
            {activeSlideIndex === 1 && (
                <SlideContent
                    key="2"
                    title="Lorem ipsum dolor sit. 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae tincidunt semper"
                />
            )}
            {activeSlideIndex === 2 && (
                <SlideContent
                    key="3"
                    title="Lorem ipsum dolor sit. 3"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae tincidunt semper"
                />
            )}
        </AnimatePresence>
    );
};

export default SlidesContent;
