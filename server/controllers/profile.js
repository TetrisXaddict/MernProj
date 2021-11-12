export const getAllProfiles = async (req, res) => {
  try {
    const foundProfiles = await profile.find();

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

export const createProfile = async (req, res) => {
  const profileVar = req.body;

  const newProfile = new profile(profileVar);

  try {
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProfile = (req, res) => {
  //todo
};
