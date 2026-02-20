import { ActionIcon, Button, Group, Tooltip } from "@mantine/core";
import { IconLanguage, IconLemon } from "@tabler/icons-react";

function Nav() {
	return (
		<div className="navigation-wrapper" style={{
			position: "absolute",
			top: "2em",
			left: "0px",
			width: "100%",
			zIndex: 20,
			fontSize: 18
		}}>
			<div className="navigation" style={{
				width: "60%",
				margin: "0px auto",
				borderRadius: 50,
				border: "1px solid rgba(255, 255, 255, 0.2)",
				background: "rgba(255, 255, 255, 0.1)",
				backdropFilter: "blur(10px)",
				paddingBlock: "1rem",
				paddingInline: "1rem",
			}}>
				<Group justify="space-between">
					<ActionIcon variant="transparent" size="xl" color="white" radius="xl" aria-label="Language" ml=".6rem">
						<IconLemon size={32} />
					</ActionIcon>
					<Group justify="center" gap="sm">
						<Button c="white" variant="transparent" size="md" radius="xl">About</Button>
						<Button c="white" variant="transparent" size="md" radius="xl">Products</Button>
						<Button c="white" variant="transparent" size="md" radius="xl">Career</Button>
						<Button c="white" variant="transparent" size="md" radius="xl">Contact</Button>
						<Tooltip label="Language" withArrow>
							<ActionIcon variant="transparent" size="xl" color="white" radius="xl" aria-label="Language">
								<IconLanguage />
							</ActionIcon>
						</Tooltip>
					</Group>
				</Group>
			</div>
		</div >
	);
}

export default Nav;
