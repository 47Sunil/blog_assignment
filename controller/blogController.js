import blogModel from "../model/blogModel.js";
import {
  elementCannotBeEmpty,
  inValidId,
  notFound,
} from "../utils/errorMessage.js";
import { isValidObjectId, isValid } from "../utils/regex.js";

export const createBlog = async (req, res) => {
  try {
    const { author, title, content } = req.body;

    // Check if the request body is empty or not
    if (!Object.keys(req.body).length) {
      return res
        .status(400)
        .json({ success: false, message: elementCannotBeEmpty("body") });
    }

    // Check if the provided author name is valid
    if (!isValid(author)) {
      return res
        .status(400)
        .json({ success: false, message: elementCannotBeEmpty("author name") });
    }

    // Check if the provided title is valid
    if (!isValid(title)) {
      return res
        .status(400)
        .json({ success: false, message: elementCannotBeEmpty("title") });
    }

    // Check if the provided content is valid
    if (!isValid(content)) {
      return res
        .status(400)
        .json({ success: false, message: elementCannotBeEmpty("content") });
    }

    // Create a new blog
    const createdblog = await blogModel.create({
      author,
      title,
      content,
    });
    // Save the updated funnel
    await createdblog.save();

    // Return a success response with information about the created blog
    return res
      .status(201)
      .json({ status: true, message: "New blog created", data: createdblog });
  } catch (error) {
    console.log(error);

    // Return an error response for any caught exceptions
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: inValidId("blog") });
    }

    const foundBlog = await blogModel.findById(id);
    console.log(foundBlog);
    if (foundBlog) {
      return res.status(200).json({
        success: true,
        from: "db",
        message: "Success",
        data: foundBlog,
      });
    }
    // If the blog is not found in the database, return a 404 error
    return res.status(404).json({ success: false, message: notFound("blog") });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const foundBlogs = await blogModel.find();
    if (foundBlogs) {
      return res.status(200).json({
        success: true,
        from: "db",
        message: "Success",
        data: foundBlogs,
      });
    }
    // If the blogs are not found in the database, return a 404 error
    return res.status(404).json({ success: false, message: notFound("blogs") });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: inValidId("blog") });
    }
    const { author, title, content } = req.body;
    const updatedFields = {};
    if (author) {
      updatedFields.author = author;
    }
    if (title) {
      updatedFields.title = title;
    }
    if (content) {
      updatedFields.content = content;
    }
    const updatedBlog = await blogModel.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });
    if (!updatedBlog) {
      return res
        .status(404)
        .json({ success: false, message: notFound("Blog") });
    }
    return res.status(200).json({
      success: true,
      data: updatedBlog,
      message: "Blog updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: inValidId("block") });
    }

    const foundBlog = await blogModel.findByIdAndDelete({ _id: id });

    if (foundBlog) {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: "Blog deleted successfully",
      });
    }
    // If the blog is not found in the database, return a 404 error
    return res.status(404).json({ success: false, message: "Blog not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
