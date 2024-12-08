FROM rust:slim AS build
ENV SQLX_OFFLINE=true
WORKDIR /akyuu

COPY . .
RUN cargo install --path .

FROM debian:stable-slim

COPY --from=build /usr/local/cargo/bin/akyuu akyuu

CMD ["./akyuu"]

