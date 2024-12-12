import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse, Divider, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExpandLess, ExpandMore, Home, Settings, Work, ListAlt, Assessment, Poll } from '@mui/icons-material';

interface SidebarMenuProps {
  open: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ open, setSidebar }) => {
  const [openProcesos, setOpenProcesos] = useState(false);
  const [openConfiguraciones, setOpenConfiguraciones] = useState(false);
  const [openTickets, setOpenTickets] = useState(false);
  const [openEncuestas, setOpenEncuestas] = useState(false);
  const [openReportes, setOpenReportes] = useState(false);

  const handleToggle = (toggleFunc: React.Dispatch<React.SetStateAction<boolean>>) => {
    toggleFunc((prev) => !prev);
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => setSidebar(false)}
      sx={{
        width: 250,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          paddingTop: '64px',
        },
      }}
    >
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Typography variant="h6" component="div">NicoAssist</Typography>
      </Box>
      <Divider />

      <List>
        {/* Inicio */}
        <ListItem button component={Link} to="/private/Inicio" onClick={() => setSidebar(false)}>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <Divider />

        {/* Procesos */}
        <ListItem button onClick={() => handleToggle(setOpenProcesos)}>
          <ListItemIcon><Work /></ListItemIcon>
          <ListItemText primary="Procesos" />
          {openProcesos ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProcesos} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button component={Link} to="/private/Incidencias-Registro">
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary="Registrar de Incidencias" />
            </ListItem>
            <ListItem button component={Link} to="/private/Incidencias-Registro2">
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary="Registrar de Incidencias 2" />
            </ListItem>
            <ListItem button component={Link} to="/private/Incidencias-Mostrar">
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary="Lista de Incidencias" />
            </ListItem>
            <ListItem button component={Link} to="/private/Maqueta-Incidencia">
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary="Maqueta Incidencia" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />

        {/* Configuraciones */}
        <ListItem button onClick={() => handleToggle(setOpenConfiguraciones)}>
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Configuraciones" />
          {openConfiguraciones ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openConfiguraciones} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button component={Link} to="/private/Administracion-Usuarios">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Administrador de Usuarios" />
            </ListItem>
            <ListItem button component={Link} to="/private/Matriz-Causales/Crear">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Matriz" />
            </ListItem>
            <ListItem button component={Link} to="/private/Asesores-Comerciales">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Asesores Comerciales" />
            </ListItem>
            <ListItem button component={Link} to="/private/Asesores-Tecnicos">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Asesores Técnicos" />
            </ListItem>
            <ListItem button component={Link} to="/private/Gestor-Reclamos">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Gestores de Reclamos" />
            </ListItem>
            <ListItem button component={Link} to="/private/Tipos-Incidencias">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Tipo de Incidencias" />
            </ListItem>
            <ListItem button component={Link} to="/private/Responsables-Reclamo">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Responsables Reclamos" />
            </ListItem>
            <ListItem button component={Link} to="/private/Area-Reclamos">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Área de Reclamos" />
            </ListItem>
            <ListItem button component={Link} to="/private/Tipo-Ficha">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Tipo de Ficha" />
            </ListItem>
            <ListItem button component={Link} to="/private/Motivos">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Motivos" />
            </ListItem>
            <ListItem button component={Link} to="/private/Sub-Motivos">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Sub Motivos" />
            </ListItem>
            <ListItem button component={Link} to="/private/AreaEvaluada">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Area Evaluada" />
            </ListItem>
            <ListItem button component={Link} to="/private/Requisitos-Tipo-Ficha">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Requisitos Tipo Ficha" />
            </ListItem>
            <ListItem button component={Link} to="/private/Acciones-Requisitos-Ficha">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Acciones Requisitos Ficha" />
            </ListItem>
            <ListItem button component={Link} to="/private/Segmento">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Segmento" />
            </ListItem>
            <ListItem button component={Link} to="/private/Calibres">
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Calibres" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />

        {/* Tickets */}
        <ListItem button onClick={() => handleToggle(setOpenTickets)}>
          <ListItemIcon><ListAlt /></ListItemIcon>
          <ListItemText primary="Tickets" />
          {openTickets ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTickets} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button component={Link} to="/private/Tickets/CreateTicket">
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItem>
            <ListItem button component={Link} to="/private/Tickets/MostrarTickets">
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary="Mostrar Tickets" />
            </ListItem>
            <ListItem button component={Link} to="/private/Tickets/HistorialTickets">
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary="Historial Tickets" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />

        {/* Encuestas */}
        <ListItem button onClick={() => handleToggle(setOpenEncuestas)}>
          <ListItemIcon><Poll /></ListItemIcon>
          <ListItemText primary="Encuestas" />
          {openEncuestas ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openEncuestas} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button component={Link} to="/private/Encuestas/Catalogos">
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary="Catálogos" />
            </ListItem>
            <ListItem button component={Link} to="/private/Encuestas/Formularios">
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary="Formularios" />
            </ListItem>
            <ListItem button component={Link} to="/private/Encuestas/GruposPreguntas">
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary="Grupos de Preguntas" />
            </ListItem>
            <ListItem button component={Link} to="/private/Encuestas/Preguntas">
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary="Preguntas" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />

        {/* Reportes */}
        <ListItem button onClick={() => handleToggle(setOpenReportes)}>
          <ListItemIcon><Assessment /></ListItemIcon>
          <ListItemText primary="Reportes" />
          {openReportes ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openReportes} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem button component={Link} to="/private/Seguimiento-De-Gestion/Incidencias">
              <ListItemIcon><Assessment /></ListItemIcon>
              <ListItemText primary="Incidencias" />
            </ListItem>
            <ListItem button component={Link} to="/private/Seguimiento-De-Gestion/SincronizarVITDATA">
              <ListItemIcon><Assessment /></ListItemIcon>
              <ListItemText primary="Sincronizar VITDATA" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default SidebarMenu;

