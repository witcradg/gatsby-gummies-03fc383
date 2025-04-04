import React, { useState, useContext } from 'react';
import { navigate } from 'gatsby';
import useAllStates from '../../services/use-all-states';
import { LayoutContext } from '../../contexts/layout-context';

export const StatePicker = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { layout } = useContext(LayoutContext);
    const prompt = layout?.statename || 'Shop By State';

    let defaultValue = layout?.statename || prompt;

    let allStateMarkdown = useAllStates();
    let stateNodes = allStateMarkdown.allMarkdownRemark.nodes;

    const setValue = (e) => {
        const node = stateNodes.find(
            (element) => element.frontmatter.statename === e.target.value
        );

        navigate(node.frontmatter.slug);
    };

    const foo = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="z-100">
            <div className="relative flex flex-column items-center w-[240px]">
                {!isOpen ? (
                    <button
                        onClick={() => foo()}
                        className="bg-white w-full rounded-lg text-lg"
                    >
                        {prompt}
                    </button>
                ) : (
                    <select
                        className="text-black bg-white rounded-lg p-1 w-full text-lg"
                        onChange={(e) => setValue(e)}
                        defaultValue={defaultValue}
                        placeholder="select a state"
                    >
                        {stateNodes.map((option) => {
                            return (
                                <option
                                    key={option.frontmatter.slug}
                                    value={option.frontmatter.statename}
                                >
                                    {option.frontmatter.statename}
                                </option>
                            );
                        })}
                    </select>
                )}
            </div>
        </div>
    );
};
