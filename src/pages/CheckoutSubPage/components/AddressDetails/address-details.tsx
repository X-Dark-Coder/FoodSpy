import { motion } from "framer-motion";
import {Input} from "components/shared";

const AddressDetails: React.FC = () => {
    return (
        <motion.section layout className="w-full max-w-[500px]">
            <h3 className="text-mono-ink text-title-3 font-bold px-5">Address Details</h3>
            <div className="w-full mt-6 px-5 flex justify-start items-start flex-col gap-4">
                <Input variant="simple" placeholder="Address" showLabel fullWidth/>
                <Input variant="simple" placeholder="Drop-off note" showLabel fullWidth/>
            </div>
        </motion.section>
    );
};

export default AddressDetails;
