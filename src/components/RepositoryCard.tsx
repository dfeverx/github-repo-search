import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Button,
	IconButton,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";

type RepositoryCardProps = {
	name: string;
	stars: number;
	forks: number;
	watchers: number;
	url: string;
};

const RepositoryCard: React.FC<RepositoryCardProps> = ({
	name,
	stars,
	forks,
	watchers,
	url,
}) => {
	const handleViewRepo = () => {
		window.open(url, "_blank");
	};

	return (
		<Card variant="outlined" sx={{ width: "100%" }}>
			<CardContent>
				<Typography variant="h5" component="div">
					{name}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ mt: 1 }}
				>
					<span role="img" aria-label="stars">
						⭐
					</span>{" "}
					{stars}{" "}
					<span role="img" aria-label="forks">
						🍴
					</span>{" "}
					{forks}{" "}
					<span role="img" aria-label="watchers">
						👁️
					</span>{" "}
					{watchers}
				</Typography>
				<Button
					variant="contained"
					onClick={handleViewRepo}
					sx={{ mt: 2 }}
				>
					View Repository
				</Button>
				<IconButton
					sx={{ mt: 1 }}
					onClick={handleViewRepo}
					target="_blank"
					rel="noopener noreferrer"
					href={url}
				>
					<GitHub />
				</IconButton>
			</CardContent>
		</Card>
	);
};

export default RepositoryCard;
