import fetcher from "../libs/fetcher";
import useSWR from "swr";
import Layout from "../components/layout";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import Link from "next/link";

export default function Exhibits() {
  const [index_page, setCurrentPage] = useState(0);
  const [search_field, setSearchField] = useState("");
  const [category_field, setCategoryField] = useState("");
  const { data } = useSWR(
    `${process.env.API_URL}/exhibits?page=${
      index_page + 1
    }&search=${search_field}&category=${category_field}`,
    fetcher
  );
  const { data: categories } = useSWR(
    `${process.env.API_URL}/exhibits/categories/`,
    fetcher
  );

  return (
    <Layout title={`Наши Экспонаты`}>
      <div
        className="moto-widget moto-widget-block moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
        data-widget="block"
        data-spacing="mala"
        data-bg-position="left top"
        data-draggable-disabled=""
      >
        <div className="container-fluid">
          <div className="row">
            <div className="moto-cell col-sm-12" data-container="container">
              <div
                className="moto-widget moto-widget-row row-fixed moto-justify-content_center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                data-grid-type="sm"
                data-widget="row"
                data-spacing="aaaa"
                data-bg-position="left top"
                data-draggable-disabled=""
              >
                <div className="container-fluid">
                  <div className="row" data-container="container">
                    <div
                      className="moto-widget moto-widget-row__column moto-cell col-sm-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="row.column"
                      data-container="container"
                      data-spacing="aaaa"
                      data-bg-position="left top"
                    >
                      <div
                        data-widget-id="wid_1529656674_0xo5ag48x"
                        className="moto-widget moto-widget-divider moto-preset-default moto-align-left moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                        data-widget="divider_horizontal"
                        data-preset="default"
                      >
                        <hr
                          className="moto-widget-divider-line"
                          style={{ maxWidth: "100%", width: "60px" }}
                        />
                      </div>
                    </div>

                    <div
                      className="moto-widget moto-widget-row__column moto-cell col-sm-11 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="row.column"
                      data-container="container"
                      data-spacing="aaaa"
                      data-bg-position="left top"
                    >
                      <div
                        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        data-widget="text"
                        data-preset="default"
                        data-spacing="aaaa"
                        data-animation=""
                        data-draggable-disabled=""
                      >
                        <div className="moto-widget-text-content moto-widget-text-editable">
                          <p className="moto-text_system_11">НАШИ ЭКСПОНАТЫ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="moto-widget moto-widget-row row-fixed"
                data-widget="row"
              >
                <div className="container-fluid">
                  <div className="row" data-container="container">
                    <div
                      className="moto-cell col-sm-9 moto-widget moto-widget-row__column"
                      data-container="container"
                      data-widget="row.column"
                    >
                      <div
                        data-widget-id="wid__blog_post_list__5b2cb4b75a02c"
                        className="moto-widget moto-widget-blog-post_list moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        data-widget="blog.post_list"
                      >
                        <ul className="moto-blog-posts-list">
                          {data ? (
                            <>
                              {data.results.map((exhibit) => (
                                <li
                                  key={exhibit.id}
                                  className="moto-blog-posts-list-item"
                                >
                                  <article>
                                    <div
                                      className="moto-widget moto-widget-row"
                                      data-widget="row"
                                    >
                                      <div className="container-fluid">
                                        <div className="row">
                                          <div
                                            className="moto-cell col-sm-12"
                                            data-container="container"
                                          >
                                            <div
                                              className="moto-widget moto-widget-text moto-preset-default moto-align-left  moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                                              data-preset="default"
                                              data-widget="text"
                                            >
                                              <div className="moto-widget-text-content moto-widget-text-editable">
                                                <h2 className="moto-text_system_8">
                                                  <Link
                                                    href={`/exhibit/[id]`}
                                                    as={`/exhibit/${exhibit.id}`}
                                                  >
                                                    <a>{exhibit.name}</a>
                                                  </Link>
                                                </h2>
                                              </div>
                                            </div>
                                            <div
                                              data-widget-id="wid__image__61732c2f793d9"
                                              className="moto-widget moto-widget-image moto-preset-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                                              data-widget="image"
                                            >
                                              <Link
                                                href={`/exhibit/[id]`}
                                                as={`/exhibit/${exhibit.id}`}
                                              >
                                                <a
                                                  data-action="blog.post"
                                                  className="moto-widget-image-link moto-link"
                                                  style={{
                                                    position: "relative",
                                                    width: "100%",
                                                    height: "440px",
                                                  }}
                                                >
                                                  <Image
                                                    className="moto-widget-image-picture lazyload"
                                                    src={exhibit.photo}
                                                    layout="fill"
                                                    objectFit="contain"
                                                    data-id=""
                                                    title=""
                                                    alt=""
                                                  />
                                                </a>
                                              </Link>
                                            </div>

                                            <div
                                              data-widget-id="wid__button__61732c2f7a1ea"
                                              className="moto-widget moto-widget-button moto-preset-3 moto-preset-provider-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                                              data-widget="button"
                                            >
                                              <Link
                                                href={`/exhibit/[id]`}
                                                as={`/exhibit/${exhibit.id}`}
                                              >
                                                <a
                                                  data-action="blog.post"
                                                  className="moto-widget-button-link moto-size-small moto-link"
                                                >
                                                  <span className="fa moto-widget-theme-icon"></span>
                                                  <span className="moto-widget-button-label">
                                                    Подробнее
                                                  </span>
                                                </a>
                                              </Link>
                                            </div>

                                            <div
                                              className="moto-widget moto-widget-divider moto-preset-3 moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto moto-align-center"
                                              data-widget="divider_horizontal"
                                              data-divider-type="horizontal"
                                              data-preset="3"
                                            >
                                              <hr className="moto-widget-divider-line" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                </li>
                              ))}{" "}
                            </>
                          ) : (
                            "load"
                          )}
                        </ul>

                        <div
                          className="moto-widget moto-widget-pagination moto-preset-default moto-spacing-top-small moto-spacing-bottom-small moto-align-left"
                          data-widget="pagination"
                          data-preset="default"
                        >
                          <ReactPaginate
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            previousLabel={
                              <i className="moto-pagination-link-icon moto-pagination-link-text fa fa-angle-left"></i>
                            }
                            nextLabel={
                              <i className="moto-pagination-link-icon moto-pagination-link-text fa fa-angle-right"></i>
                            }
                            breakLabel={"..."}
                            pageClassName={
                              "moto-pagination-item moto-pagination-item-page"
                            }
                            breakClassName={
                              "moto-pagination-item moto-pagination-item-page"
                            }
                            nextClassName={
                              "moto-pagination-item moto-pagination-item-page"
                            }
                            previousClassName={
                              "moto-pagination-item moto-pagination-item-page"
                            }
                            pageLinkClassName={
                              "moto-pagination-link moto-pagination-link-text"
                            }
                            breakLinkClassName={
                              "moto-pagination-link moto-pagination-link-text"
                            }
                            nextLinkClassName={
                              "moto-pagination-link moto-pagination-link-text"
                            }
                            previousLinkClassName={
                              "moto-pagination-link moto-pagination-link-text"
                            }
                            activeClassName={"moto-pagination-link_active"}
                            containerClassName={
                              "moto-pagination-group moto-pagination-group_pages"
                            }
                            initialPage={index_page}
                            forcePage={index_page}
                            pageCount={data ? data.page_count : 1}
                            onPageChange={(page) =>
                              setCurrentPage(page.selected)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="moto-cell col-sm-3 moto-widget moto-widget-row__column"
                      data-container="container"
                      data-widget="row.column"
                    >
                      <div
                        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                        data-widget="text"
                        data-preset="default"
                        data-spacing="aasa"
                        data-animation=""
                      >
                        <div className="moto-widget-text-content moto-widget-text-editable">
                          <p className="moto-text_system_8">Поиск</p>
                        </div>
                      </div>

                      <div
                        id="wid_1529605996_yxea9hhps"
                        className="moto-widget moto-widget-contact_form moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                        data-preset="default"
                        data-widget="contact_form"
                        data-spacing="sasa"
                      >
                        <div
                          ng-controller="widget.ContactForm.Controller"
                          ng-init='hash = &apos;2@eyJoIjoiTXpcL005TjFCYjQycmxiZnhTUnhnWVVFQVFuOG9rNytvcFg5MGJ0dkx1U009IiwiaSI6IkkwSHZiNTFnQ0RuMTNESjBaa3ZqNEE9PSIsInYiOiJIVEpzVWJaaFFMTmM4V1dzQVR4dVV0UXlxaWZQa2dSYmQzc2JneTNOcGR2M0lGbUF5MmcxNVRoZm1YWHV3M2NpRzIyVGFnQWNSK2RrNzBmZlN0WUJmRDBwdklBSmtSaTRVQ1VIZFk1b2ZwVT0ifQ==&apos;;actionAfterSubmission={"action":"none","url":"","target":"_self","id":""};resetAfterSubmission=false'
                        >
                          <div className="moto-widget-contact_form-form ng-pristine ng-invalid ng-invalid-required">
                            <div
                              ng-show="sending"
                              className="contact-form-loading ng-hide"
                            ></div>

                            <div className="moto-widget-contact_form-group">
                              <label
                                htmlFor="search_field"
                                className="moto-widget-contact_form-label"
                              >
                                Наименование
                              </label>
                              <input
                                type="text"
                                className="moto-widget-contact_form-field moto-widget-contact_form-input ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                                placeholder="Наименование"
                                name="search_field"
                                value={search_field}
                                onChange={(e) => setSearchField(e.target.value)}
                                id="search_field"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="wid_1529605996_yxea9hhps"
                        className="moto-widget moto-widget-contact_form moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                        data-preset="default"
                        data-widget="contact_form"
                        data-spacing="sasa"
                      >
                        <div
                          ng-controller="widget.ContactForm.Controller"
                          ng-init='hash = &apos;2@eyJoIjoiTXpcL005TjFCYjQycmxiZnhTUnhnWVVFQVFuOG9rNytvcFg5MGJ0dkx1U009IiwiaSI6IkkwSHZiNTFnQ0RuMTNESjBaa3ZqNEE9PSIsInYiOiJIVEpzVWJaaFFMTmM4V1dzQVR4dVV0UXlxaWZQa2dSYmQzc2JneTNOcGR2M0lGbUF5MmcxNVRoZm1YWHV3M2NpRzIyVGFnQWNSK2RrNzBmZlN0WUJmRDBwdklBSmtSaTRVQ1VIZFk1b2ZwVT0ifQ==&apos;;actionAfterSubmission={"action":"none","url":"","target":"_self","id":""};resetAfterSubmission=false'
                        >
                          <div className="moto-widget-contact_form-form ng-pristine ng-invalid ng-invalid-required">
                            <div
                              ng-show="sending"
                              className="contact-form-loading ng-hide"
                            ></div>

                            {categories ? (
                              <div className="moto-widget moto-widget-menu moto-preset-3 moto-align-center moto-align-center_mobile-h moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto false">
                                <ul className="moto-widget-menu-list moto-widget-menu-list_horizontal">
                                  <li className="moto-widget-menu-item">
                                    <a
                                      style={{ cursor: "default" }}
                                      className={`${
                                        category_field === "" &&
                                        "moto-widget-menu-link-active "
                                      } moto-widget-menu-link moto-widget-menu-link-level-1 moto-link`}
                                      onClick={(e) => setCategoryField("")}
                                    >
                                      Очистить
                                    </a>
                                  </li>
                                  {categories.map((category) => (
                                    <li
                                      key={category.id}
                                      className="moto-widget-menu-item"
                                    >
                                      <a
                                        style={{ cursor: "default" }}
                                        className={`${
                                          category_field === categories.id &&
                                          "moto-widget-menu-link-active "
                                        } moto-widget-menu-link moto-widget-menu-link-level-1 moto-link`}
                                        onClick={(e) =>
                                          setCategoryField(category.id)
                                        }
                                      >
                                        {category.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              "load..."
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
