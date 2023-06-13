// src/components/RepositoryList.tsx

import React from "react";
import { Repository } from "../App";
import { List, ListItem, Link } from "@mui/material";
import RepositoryCard from "./RepositoryCard";

interface RepositoryListProps {
	repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
	return (
		<List>
			{repositories.map((repo) => (
				<ListItem key={repo.id}>
					<RepositoryCard
						name={repo.name}
						forks={repo.forks}
						stars={repo.forks}
						url={repo.html_url}
						watchers={repo.watchers}
						key={repo.id}
					></RepositoryCard>
					{/* <Link
						href={repo.html_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{repo.name}
					</Link> */}
				</ListItem>
			))}
		</List>
	);
};

export default RepositoryList;
