import { faChevronDown, faChevronUp, Header, Button } from "@architecture-it/stylesystem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Divider, Menu, MenuItem, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function HeaderConDropdown() {
    // Estilos en línea sólo como ejemplo
    const styles = {
        link: {
            color: "var(--gray-600)",
            paddingBlock: 10,
            fontFamily: "Roboto",
            fontSize: "0.875rem",
            fontWeight: "400",
        },
        button: {
            minHeight: "inherit",
            borderRadius: 0,
            "&:hover": {
                backgroundColor: "inherit",
            },
        },
        paper: {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
        },
        loginButton: {
            maxHeight: "2rem",
        },
    };

    const iconStyle = "fontSize: 15, '& > *:first-child': {fontSize: 15,},";

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    

    const isMobile = useMediaQuery("(max-width: 576px)");

    return (
        <Header>
            <Box display={{ xs: "none", sm: "block" }} marginX={2} marginY={0} minHeight="inherit">
                <Button
                    aria-controls="navbar-menu"
                    aria-haspopup="true"
                    classes={{
                        endIcon: iconStyle,
                    }}
                    color="secondary"
                    endIcon={<FontAwesomeIcon icon={Boolean(anchorEl) ? faChevronUp : faChevronDown} />}
                    style={styles.button}
                    text="Personas"
                    typographyProps={{
                        color: "secondary",
                        fontFamily: "Roboto",
                        fontSize: "0.875rem",
                        fontWeight: "400",
                    }}
                    variant="text"
                    onClick={handleClick}
                />
                <Menu
                    keepMounted
                    MenuListProps={{ disablePadding: true }}
                    PaperProps={{
                        style: styles.paper,
                        elevation: 1,
                    }}
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    elevation={0}
                    id="navbar-menu"
                    open={Boolean(anchorEl)}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    onClose={handleClose}
                >
                    <Divider />
                    <MenuItem style={styles.link} onClick={handleClose}>
                        <Typography component="p" variant="h6">
                            Pymes
                        </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem style={styles.link} onClick={handleClose}>
                        <Typography component="p" variant="h6">
                            Corporativo
                        </Typography>
                    </MenuItem>
                </Menu>
            </Box>
            <Button style={styles.loginButton} text="Ingresar" variant={isMobile ? "text" : "outlined"} />
        </Header>
    );
}

export default HeaderConDropdown;