export const getProfiles = (req, res) => {
  try {
    const foundProfiles = profile.find();
  } catch (error) {}
};

export const getProfile = (req, res) => {
  //needs params for fidning individual profile
  try {
    const foundProfile = profile.find();
  } catch (error) {}
};

export const createProfile = (req, res) => {
  res.send("Router is working");
};
