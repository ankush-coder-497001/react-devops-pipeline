const requiredEnvs = ["VITE_API_URL", "VITE_APP_ENV"];

const missing = requiredEnvs.filter(
  (env) => !import.meta.env[env]
);

if (missing.length > 0) {
  console.error(
    `❌ Missing env variables: ${missing.join(", ")}`
  );

  throw new Error("Required environment variables are missing");
}

console.log("✅ All required env variables are present");
