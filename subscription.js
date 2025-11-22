// subscription.js
async function isSubscribed() {
  const { data: userData } = await _supabase.auth.getUser();
  const user = userData.user;

  if (!user) return false;

  const { data } = await _supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .eq("status", "active")
    .maybeSingle();

  return !!data; // returns true if active
}

async function requireSubscription() {
  const sub = await isSubscribed();

  if (!sub) {
    window.location.href = "/plans.html"; 
  }
}

// Auto-run when included
requireSubscription();
