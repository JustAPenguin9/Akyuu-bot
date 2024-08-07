ARG RUST_VERSION=1.74

FROM rust:${RUST_VERSION}-slim as build
ENV SQLX_OFFLINE=true
workdir /akyuu

COPY . .
RUN cargo install --path .

FROM debian:stable-slim

COPY --from=build /usr/local/cargo/bin/akyuu akyuu

CMD ["./akyuu"]

