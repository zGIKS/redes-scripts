addModule("ROUTER_LIMA", "0/0", "HWIC-2T");
addModule("ROUTER_LIMA", "0/1", "HWIC-2T");

addModule("ROUTER_LA_LIBERTAD", "0/0", "HWIC-2T");
addModule("ROUTER_ICA", "0/0", "HWIC-2T");
addModule("ROUTER_HUANUCO", "0/0", "HWIC-2T");
addModule("ROUTER_PUNO", "0/0", "HWIC-2T");

addLink("ROUTER_LIMA", "Serial0/0/0", "ROUTER_LA_LIBERTAD", "Serial0/0/0", "serial");
addLink("ROUTER_LIMA", "Serial0/0/1", "ROUTER_ICA", "Serial0/0/0", "serial");
addLink("ROUTER_LIMA", "Serial0/1/0", "ROUTER_HUANUCO", "Serial0/0/0", "serial");
addLink("ROUTER_LIMA", "Serial0/1/1", "ROUTER_PUNO", "Serial0/0/0", "serial");
