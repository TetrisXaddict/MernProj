export const getAllProfiles = async (req, res) => {
  try {
    const foundProfiles = profile.find();

    res.status(200).json(foundProfiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
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
