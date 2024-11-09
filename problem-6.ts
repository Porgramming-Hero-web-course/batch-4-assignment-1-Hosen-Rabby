{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const myProfile: Profile = {
    name: "Alice",
    age: 26,
    email: "alice@example.com",
  };

  const updateProfile = (profile: Profile, upd: Partial<Profile>): Profile => {
    return { ...profile, ...upd };
  };

  console.log(updateProfile(myProfile, { age: 30 }));
}
