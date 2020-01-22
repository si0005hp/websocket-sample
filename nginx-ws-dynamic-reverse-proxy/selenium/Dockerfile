FROM selenium/standalone-chrome-debug:3.6.0-copper

USER root

RUN apt-get update -y \
  && mkdir -p /var/cache/apt/archives \
  && apt-get -y install \
  openssh-server \
  curl \
  tcpdump \
  websockify \
  novnc \
  && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# no vnc password
# RUN sed -i 's/x11vnc .*/x11vnc -forever -shared -rfbport 5900 -display $DISPLAY \&/' /opt/bin/entry_point.sh

# set vnc password
RUN sed -i '/^fluxbox /a x11vnc -storepasswd "${VNC_PASSWD}" ~/.vnc/passwd' /opt/bin/entry_point.sh
RUN sed -i '/^x11vnc /a websockify 6900 localhost:5900 \&' /opt/bin/entry_point.sh

# sshd
RUN passwd -d seluser
RUN passwd -d root
RUN mkdir /var/run/sshd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -i 's/PermitEmptyPasswords no/PermitEmptyPasswords yes/' /etc/ssh/sshd_config
RUN sed -i 's/UsePAM yes/UsePAM no/' /etc/ssh/sshd_config
RUN sed -i '/^websockify /a sudo service ssh start &' /opt/bin/entry_point.sh

USER seluser

WORKDIR /home/seluser
COPY selenium/selenium-java-1.0-SNAPSHOT.jar /home/seluser/