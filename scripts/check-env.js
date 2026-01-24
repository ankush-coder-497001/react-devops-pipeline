const requiredEnvs = [
  "VITE_API_URL",
  "VITE_APP_ENV"
];

const missing = requiredEnvs.filter(
  (env) => !process.env[env]
);

if (missing.length > 0) {
  console.error("Missing env variables:", missing.join(", "));
  process.exit(1);
}

console.log("All required env variables are present");
