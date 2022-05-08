import { PageContainer } from "layouts";
import ErrorPicture from "assets/img/error-picture.svg";
import { Button } from "components/shared";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <PageContainer>
            <div className="w-full h-full flex justify-center items-center flex-col">
                <img src={ErrorPicture} alt="not-found" />
                <h3 className="text-title-3 text-mono-ink font-bold mt-4"><span className="text-accent-redd font-extrabold">404</span> Page Not Found</h3>
                <p className="text-mono-ink-lighter text-small-14 mt-4 max-w-[250px] text-center">
                    The link you followed not found <br />
                    press this button to go back
                </p>
                <Button variant="wide-primary" onClick={() => navigate("/home")} className="mt-9">
                    Back To Home
                </Button>
            </div>
        </PageContainer>
    );
};

export default NotFoundPage;
