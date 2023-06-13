import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRepositories } from "../store/repositoriesSlice";
import { Button, TextField, Grid } from "@mui/material";

const SearchForm: React.FC = () => {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();

	const handleSearch = () => {
		dispatch(fetchRepositories(query));
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={8}>
				<TextField
					label="Search repositories"
					fullWidth
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Button
					variant="contained"
					onClick={handleSearch}
					disabled={!query}
				>
					Search
				</Button>
			</Grid>
		</Grid>
	);
};

export default SearchForm;
