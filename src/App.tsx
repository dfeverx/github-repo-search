import React from "react";
import SearchForm from "./components/SearchForm";
import RepositoryList from "./components/RepositoryList";
import { AppBar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories } from "./store/repositoriesSlice";
import { RootState } from "./main";

export interface Repository {
	id: number;
	name: string;
	html_url: string;
	description: string;
	forks: number;
	watchers: number;
}

export interface GitHubSearchResponse {
	items: Repository[];
}

const App: React.FC = () => {
	const dispatch = useDispatch();
	const repositories = useSelector(
		(state: RootState) => state.repositories.data
	);
	const loading = useSelector(
		(state: RootState) => state.repositories.loading
	);
	const error = useSelector((state: RootState) => state.repositories.error);

	return (
		<div style={{ padding: 32 }}>
			<AppBar
				color="default"
				enableColorOnDark
				sx={{ pr: 10, pl: 10, pb: 5 }}
			>
				<h4>GitHub Repository Search</h4>
				<SearchForm />
			</AppBar>
			{error && <p>{error}</p>}
			{repositories.length > 0 && (
				<RepositoryList repositories={repositories} />
			)}
		</div>
	);
};

export default App;
