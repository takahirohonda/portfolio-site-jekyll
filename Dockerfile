# Use an official Ruby base image
FROM ruby:3.2
# Install deps
RUN apt-get update && \
    apt-get install -y curl build-essential libffi-dev nodejs ca-certificates

# Copy Zscaler cert
COPY ZscalerRootCA.pem /usr/local/share/ca-certificates/ZscalerRootCA.crt

# Register it with system CA
RUN update-ca-certificates

# ✅ CRUCIAL: force RubyGems to use system certs
ENV SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt
ENV OPENSSL_CONF=/etc/ssl/

# Set working dir
WORKDIR /srv/jekyll

# Install Jekyll & Bundler
RUN gem update --system && gem install bundler jekyll

# Copy site files
COPY . .

# Install bundle
RUN bundle install

EXPOSE 4000
CMD ["jekyll", "serve", "--host", "0.0.0.0"]