FROM ruby:3.3.4-bullseye

ARG USERNAME=ajay
ARG USER_UID=1000
ARG USER_GID=$USER_UID

ENV TZ=Asia/Kathmandu
ENV GEM_HOME=/home/$USERNAME/.bundle
ENV PATH=$GEM_HOME/bin:$PATH
ENV BUNDLE_PATH=$GEM_HOME

# Create the user first
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt-get update \
    && apt-get install -y sudo nodejs npm \
    && npm install -g yarn \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set up bundler directory
RUN mkdir -p $GEM_HOME \
    && chown -R $USERNAME:$USERNAME $GEM_HOME

# Switch to non-root user
USER $USERNAME

# Set working directory
WORKDIR /home/$USERNAME

# Install Jekyll and Bundler
RUN gem install jekyll bundler

EXPOSE 4000
EXPOSE 35729

