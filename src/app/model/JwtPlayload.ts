interface JwtPayload {
  sub: string;
  exp: number;
  iat: number;
  scope: string;
}
