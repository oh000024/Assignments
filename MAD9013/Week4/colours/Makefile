#	$Id: Makefile 11 2005-11-26 11:15:19Z inajima $

XFLAGS=		-activeconfiguration

.PHONY: build installsrc install clean

build:
	xcodebuild ${XFLAGS}

installsrc:
	xcodebuild ${XFLAGS} installsrc

install:
	xcodebuild ${XFLAGS} install

clean:
	xcodebuild ${XFLAGS} clean
