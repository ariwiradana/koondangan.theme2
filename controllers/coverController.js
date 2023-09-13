import Cover from "@/models/Cover";

export const getCover = async (req, res) => {
  const { limit, folder, theme } = req.query;

  try {
    let data;
    if (limit) {
      data = await Cover.find({ folder, theme })
        .limit(limit)
        .sort({ created_at: -1 });
    } else {
      data = await Cover.find({ folder, theme }).sort({ created_at: -1 });
    }
    const total = await Cover.countDocuments({ folder, theme });

    const response = {
      success: true,
      data: data,
      total,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createCover = async (req, res) => {
  const { title, base64 } = req.body;
  try {
    const response = await Cover.create({
      title,
      base64,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};
