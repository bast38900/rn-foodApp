import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, ScrollViewComponent } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    /// function to filter price
    const filteResultsByPrice = (price) => {
        return results.filter(results => {
            return results.price === price;
        });
    };

    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantList 
                results={filteResultsByPrice('$')} 
                title="Low Budget"
                />
                <RestaurantList 
                results={filteResultsByPrice('$$')}
                title="Standard" 
                />
                <RestaurantList 
                results={filteResultsByPrice('$$$')} 
                title="Premium" 
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;