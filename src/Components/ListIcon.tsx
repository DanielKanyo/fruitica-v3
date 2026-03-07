import { ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

interface ListIconProps {
	color: string;
}

function ListIcon({ color }: ListIconProps) {
	return (
		<ThemeIcon color={color} size={24} radius="xl">
			<IconCheck size={16} />
		</ThemeIcon>
	);
}

export default ListIcon;
