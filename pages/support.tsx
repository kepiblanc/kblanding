import AppCommunity from "@/components/common/AppCommunity";
import AppHeader from "@/components/common/AppHeader";
import DownloadCardContainer from "@/components/common/DownloadCardContainer";
import Footer from "@/components/common/Footer";
import HowCanWeHelp from "@/components/common/HowCanWeHelp";

const Support = () => {
    return (
        <>
            <HowCanWeHelp />
            <AppHeader pageTitle="Kabukabu | Kabukabu Support" />
            <AppCommunity />
            <DownloadCardContainer />
            <Footer />
        </>
    )
}

export default Support;