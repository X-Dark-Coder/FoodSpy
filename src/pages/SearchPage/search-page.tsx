import { SearchInput } from "components/shared";
import { PageContainer } from "layouts";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate, useParams } from "react-router-dom";
import { Filter, PopularSearch, ResultTabs, SearchHistory, ShowSearchResult } from "./components";
import { TSearchFilter } from "./components/Filter/types";
import { TTabs } from "./components/ResultTabs/types";
import { addHistory, getHistory } from "./components/SearchHistory/historyStorage";
import { TSearchResult } from "./components/ShowSearchResult/types";
import { searchSectionsVariants } from "./search-page.constants";
import { restaurants, foods } from "api/fakeApi";

const SearchPage: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
    const { search } = useParams<{ search: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<TTabs>("restaurant");
    const [history, setHistory] = useState(getHistory());
    const [searchResult, setSearchResult] = useState<TSearchResult>(null);
    const [searchFilter, setSearchFilter] = useState<TSearchFilter>({
        calorieRange: [undefined, undefined],
        priceRange: [undefined, undefined],
        selectedTypes: [],
    });

    const submitSearch = useCallback(
        (searchText: string) => {
            if (searchText.length === 0) {
                navigate("/search");
            } else {
                if (searchText !== search) {
                    setSearchResult(null);
                    const newHistoryList = addHistory(searchText);
                    setHistory(newHistoryList);
                    navigate("/search/" + searchText);
                    fakeSearchApi();
                }
            }
        },
        [search]
    );

    const fakeSearchApi = () => {
        setTimeout(() => {
            setSearchResult({
                foods,
                restaurants,
            });
        }, 2000);
    };

    const onSearchInputClear = () => {
        navigate("/search");
        setSearchResult(null);
    };

    useEffect(() => {
        if (search && search.length !== 0) {
            const newHistoryList = addHistory(search);
            setHistory(newHistoryList);
            fakeSearchApi();
        }
    }, []);

    return (
        <PageContainer>
            <main className="w-full h-full pt-4 px-6">
                <div className="w-full flex justify-between items-center">
                    <div className="flex justify-center items-center flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <div className="flex justify-center items-center sm:block  w-full sm:w-[215px] lg:w-[335px]">
                            <SearchInput
                                onSearchClicked={submitSearch}
                                onClearButtonClicked={onSearchInputClear}
                                showClearButton
                                variant="default"
                                type="text"
                                placeholder="Search something"
                                initialInputValue={search}
                            />
                            {isMobile && (
                                <Filter
                                    searchFilter={searchFilter}
                                    setSearchFilter={setSearchFilter}
                                    disable={search === undefined}
                                />
                            )}
                        </div>
                        <ResultTabs disable={search === undefined} activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                    {!isMobile && (
                        <Filter
                            searchFilter={searchFilter}
                            setSearchFilter={setSearchFilter}
                            disable={search === undefined}
                        />
                    )}
                </div>

                <AnimatePresence exitBeforeEnter>
                    {search ? (
                        <motion.div key={1} variants={searchSectionsVariants} initial="hide" animate="show" exit="exit">
                            <ShowSearchResult result={searchResult} type={activeTab} />
                        </motion.div>
                    ) : (
                        <motion.div
                        layout
                            key={2}
                            variants={searchSectionsVariants}
                            initial="hide"
                            animate="show"
                            exit="exit"
                            className="max-w-[500px]"
                        >
                            {history.length !== 0 && (
                                <SearchHistory
                                    history={history}
                                    setHistory={setHistory}
                                    setSearchResult={setSearchResult}
                                />
                            )}

                            <PopularSearch setSearchResult={setSearchResult} setHistory={setHistory} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </PageContainer>
    );
};

export default SearchPage;
